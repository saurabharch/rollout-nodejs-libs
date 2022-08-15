var assert = require('assert');
const { RolloutChatbotUtil } = require('..');

/***************************
 ********* LEGACY IMAGE ****
 ***************************/

/**
  * legacy \image
  */
 describe('RolloutChatbotUtil', function() {
    describe('parseReply() of legacy \image', function() {
        it('should return an image message', function() {
            // const cbutil = new RolloutChatbotUtil();
            const text = "Intro text\n\\image:http://IMAGE_HOST/IMAGE_PATH";
            console.log("legacy images parsing text:", text);
            const reply = RolloutChatbotUtil.parseReply(text);
            console.log("legacy images reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, RolloutChatbotUtil.TYPE_IMAGE);
            assert(reply.message.metadata != null);
            assert.strictEqual(reply.message.metadata.src, 'http://IMAGE_HOST/IMAGE_PATH');
            assert.strictEqual(reply.message.metadata.width, 200);
            assert.strictEqual(reply.message.metadata.height, 200);
        });
    });
});