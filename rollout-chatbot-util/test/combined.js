var assert = require('assert');
const { RolloutChatbotUtil } = require('..');

/**
  * legacy image and bullet buttons combined 
  */
 describe('RolloutChatbotUtil', function() {
    describe('parseReply() of tdImage and bullet buttons', function() {
        it('should return an image message combined with buttons', function() {
            // const cbutil = new RolloutChatbotUtil();
            const text = "Intro text\ntdImage,w200 h400:http://IMAGE_HOST/IMAGE_PATH\n* Button1\n* button2";
            console.log("parsing text:", text);
            const reply = RolloutChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, RolloutChatbotUtil.TYPE_IMAGE);
            assert(reply.message.metadata != null);
            assert.strictEqual(reply.message.metadata.src, 'http://IMAGE_HOST/IMAGE_PATH');
            assert.strictEqual(reply.message.metadata.width, 200);
            assert.strictEqual(reply.message.metadata.height, 400);
        });
    });
});