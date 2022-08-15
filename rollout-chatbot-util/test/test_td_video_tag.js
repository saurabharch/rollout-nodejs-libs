var assert = require('assert');
const { RolloutChatbotUtil } = require('..');

/************************
 * TDVIDEO
 ************************/

 /**
  * https
  */
 describe('RolloutChatbotUtil', function() {
    describe('parseReply() of tdVideo with https://VIDEO_URL', function() {
        it('should return a frame message', function() {
            const text = "Intro text\ntdVideo:https://VIDEO_HOST/PATH";
            console.log("parsing text:", text);
            const reply = RolloutChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, RolloutChatbotUtil.TYPE_FRAME);
            assert(reply.message.metadata != null);
            assert.strictEqual(reply.message.metadata[RolloutChatbotUtil.FRAME_TYPE_KEY], RolloutChatbotUtil.TYPE_VIDEO);
            assert.strictEqual(reply.message.metadata.src, 'https://VIDEO_HOST/PATH');
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": frame,
            //         "metadata": {
            //             "src": "IMAGE_URL"
            //         }
            //     }
            // }
        });
    });
});

/**
  * parse youtube video url
  */
 describe('RolloutChatbotUtil', function() {
    describe('parseReply() of tdVideo with https://YOUTUBE_VIDEO_URL', function() {
        it('should return a frame message', function() {
            const text = "Intro text\ntdVideo:https://www.youtube.com/watch?v=MHXO86wKeDY&disturbing_parameter=fake_value";
            console.log("parsing text:", text);
            const reply = RolloutChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, RolloutChatbotUtil.TYPE_FRAME);
            assert(reply.message.metadata != null);
            assert.strictEqual(reply.message.metadata[RolloutChatbotUtil.FRAME_TYPE_KEY], RolloutChatbotUtil.TYPE_VIDEO);
            assert.strictEqual(reply.message.metadata.src, 'https://www.youtube.com/embed/MHXO86wKeDY');
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": frame,
            //         "metadata": {
            //             "src": "IMAGE_URL"
            //         }
            //     }
            // }
        });
    });
});
