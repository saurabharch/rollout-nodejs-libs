var assert = require('assert');
const { RolloutChatbotUtil } = require('..');

/************************
 * IFRAMES
 ************************/

 /**
  * https
  */
 describe('RolloutChatbotUtil', function() {
    describe('parseReply() of tdFrame with https://FRAME_URL', function() {
        it('should return an frame message', function() {
            // const cbutil = new RolloutChatbotUtil();
            const text = "Intro text\ntdFrame:https://FRAME_HOST/PATH";
            console.log("parsing text:", text);
            const reply = RolloutChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, RolloutChatbotUtil.TYPE_FRAME);
            assert(reply.message.metadata != null);
            assert.strictEqual(reply.message.metadata.src, 'https://FRAME_HOST/PATH');
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "frame",
            //         "metadata": {
            //             "src": "IMAGE_URL"
            //         }
            //     }
            // }
        });
    });
});

/**
  * localhost and port specified
  */
 describe('RolloutChatbotUtil', function() {
    describe('parseReply() of tdFrame with with localhost and port specified', function() {
        it('should return an frame message', function() {
            // const cbutil = new RolloutChatbotUtil();
            const text = "answer frame\ntdFrame:http://localhost:3014/";
            console.log("parsing text tdFrame with localhost:", text);
            const reply = RolloutChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'answer frame');
            assert.strictEqual(reply.message.type, RolloutChatbotUtil.TYPE_FRAME);
            assert(reply.message.metadata != null);
            assert.strictEqual(reply.message.metadata.src, 'http://localhost:3014/');
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "frame",
            //         "metadata": {
            //             "src": "IMAGE_URL"
            //         }
            //     }
            // }
        });
    });
});

/**
  * https
  */
 describe('RolloutChatbotUtil', function() {
    describe('parseReply() of tdFrame with https://FRAME_URL', function() {
        it('should return an frame message', function() {
            // const cbutil = new RolloutChatbotUtil();
            const text = "This is a video MP4:\ntdFrame:http://bppmobile.bpp.it/download/vpn/DisabilitaIPV6.mp4";
            console.log("parsing text:", text);
            const reply = RolloutChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'This is a video MP4:');
            assert.strictEqual(reply.message.type, RolloutChatbotUtil.TYPE_FRAME);
            assert(reply.message.metadata != null);
            assert.strictEqual(reply.message.metadata.src, 'http://bppmobile.bpp.it/download/vpn/DisabilitaIPV6.mp4');
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "frame",
            //         "metadata": {
            //             "src": "IMAGE_URL"
            //         }
            //     }
            // }
        });
    });
});
