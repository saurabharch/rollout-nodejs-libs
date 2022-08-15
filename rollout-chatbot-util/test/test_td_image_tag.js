var assert = require('assert');
const { RolloutChatbotUtil } = require('..');

/************************
 * IMAGES
 ************************/

 /**
  * https
  */
describe('RolloutChatbotUtil', function() {
    describe('parseReply() of tdImage with https://IMAGE_URL', function() {
        it('should return an image message', function() {
            // const cbutil = new RolloutChatbotUtil();
            const text = "Intro text\ntdImage:https://IMAGE_HOST/IMAGE_PATH";
            console.log("parsing text:", text);
            const reply = RolloutChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, RolloutChatbotUtil.TYPE_IMAGE);
            assert(reply.message.metadata != null);
            assert.strictEqual(reply.message.metadata.src, 'https://IMAGE_HOST/IMAGE_PATH');
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "image",
            //         "metadata": {
            //             "src": "IMAGE_URL"
            //         }
            //     }
            // }
        });
    });
});

/**
  * http
  */
describe('RolloutChatbotUtil', function() {
    describe('parseReply() of tdImage with http://IMAGE_URL', function() {
        it('should return an image message', function() {
            // const cbutil = new RolloutChatbotUtil();
            const text = "Intro text\ntdImage:http://IMAGE_HOST/IMAGE_PATH";
            console.log("parsing text:", text);
            const reply = RolloutChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, RolloutChatbotUtil.TYPE_IMAGE);
            assert(reply.message.metadata != null);
            assert.strictEqual(reply.message.metadata.src, 'http://IMAGE_HOST/IMAGE_PATH');
        });
    });
});

/**
  * image width-height
  */
describe('RolloutChatbotUtil', function() {
    describe('parseReply() of tdImage with width and height', function() {
        it('should return an image message', function() {
            // const cbutil = new RolloutChatbotUtil();
            const text = "Intro text\ntdImage,w200 h400:http://IMAGE_HOST/IMAGE_PATH";
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

/**
  * image "width" only
  */
describe('RolloutChatbotUtil', function() {
    describe('parseReply() of tdImage - width only', function() {
        it('should return an image message', function() {
            // const cbutil = new RolloutChatbotUtil();
            const text = "Intro text\ntdImage, w200:http://IMAGE_HOST/IMAGE_PATH";
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
            assert.strictEqual(reply.message.metadata.height, undefined);
        });
    });
});

/**
  * image "height" only
  */
describe('RolloutChatbotUtil', function() {
    describe('parseReply() of tdImage - height only', function() {
        it('should return an image message', function() {
            // const cbutil = new RolloutChatbotUtil();
            const text = "Intro text\ntdImage , h300:http://IMAGE_HOST/IMAGE_PATH";
            console.log("parsing text:", text);
            const reply = RolloutChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, RolloutChatbotUtil.TYPE_IMAGE);
            assert(reply.message.metadata != null);
            assert.strictEqual(reply.message.metadata.src, 'http://IMAGE_HOST/IMAGE_PATH');
            assert.strictEqual(reply.message.metadata.width, undefined);
            assert.strictEqual(reply.message.metadata.height, 300);
        });
    });
});

