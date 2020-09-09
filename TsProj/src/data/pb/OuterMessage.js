/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var Long = require("long");
$protobuf.util.Long = Long;
$protobuf.configure();


// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.NiceET = (function() {

    /**
     * Namespace NiceET.
     * @exports NiceET
     * @namespace
     */
    var NiceET = {};

    NiceET.C2M_TestRequest = (function() {

        /**
         * Properties of a C2M_TestRequest.
         * @memberof NiceET
         * @interface IC2M_TestRequest
         * @property {number|null} [RpcId] C2M_TestRequest RpcId
         * @property {number|Long|null} [ActorId] C2M_TestRequest ActorId
         * @property {string|null} [request] C2M_TestRequest request
         */

        /**
         * Constructs a new C2M_TestRequest.
         * @memberof NiceET
         * @classdesc Represents a C2M_TestRequest.
         * @implements IC2M_TestRequest
         * @constructor
         * @param {NiceET.IC2M_TestRequest=} [properties] Properties to set
         */
        function C2M_TestRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2M_TestRequest RpcId.
         * @member {number} RpcId
         * @memberof NiceET.C2M_TestRequest
         * @instance
         */
        C2M_TestRequest.prototype.RpcId = 0;

        /**
         * C2M_TestRequest ActorId.
         * @member {number|Long} ActorId
         * @memberof NiceET.C2M_TestRequest
         * @instance
         */
        C2M_TestRequest.prototype.ActorId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2M_TestRequest request.
         * @member {string} request
         * @memberof NiceET.C2M_TestRequest
         * @instance
         */
        C2M_TestRequest.prototype.request = "";

        /**
         * Creates a new C2M_TestRequest instance using the specified properties.
         * @function create
         * @memberof NiceET.C2M_TestRequest
         * @static
         * @param {NiceET.IC2M_TestRequest=} [properties] Properties to set
         * @returns {NiceET.C2M_TestRequest} C2M_TestRequest instance
         */
        C2M_TestRequest.create = function create(properties) {
            return new C2M_TestRequest(properties);
        };

        /**
         * Encodes the specified C2M_TestRequest message. Does not implicitly {@link NiceET.C2M_TestRequest.verify|verify} messages.
         * @function encode
         * @memberof NiceET.C2M_TestRequest
         * @static
         * @param {NiceET.IC2M_TestRequest} message C2M_TestRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2M_TestRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.request != null && message.hasOwnProperty("request"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.request);
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                writer.uint32(/* id 93, wireType 0 =*/744).sint64(message.ActorId);
            return writer;
        };

        /**
         * Encodes the specified C2M_TestRequest message, length delimited. Does not implicitly {@link NiceET.C2M_TestRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.C2M_TestRequest
         * @static
         * @param {NiceET.IC2M_TestRequest} message C2M_TestRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2M_TestRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2M_TestRequest message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.C2M_TestRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.C2M_TestRequest} C2M_TestRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2M_TestRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.C2M_TestRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 93:
                    message.ActorId = reader.sint64();
                    break;
                case 1:
                    message.request = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2M_TestRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.C2M_TestRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.C2M_TestRequest} C2M_TestRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2M_TestRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2M_TestRequest message.
         * @function verify
         * @memberof NiceET.C2M_TestRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2M_TestRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (!$util.isInteger(message.ActorId) && !(message.ActorId && $util.isInteger(message.ActorId.low) && $util.isInteger(message.ActorId.high)))
                    return "ActorId: integer|Long expected";
            if (message.request != null && message.hasOwnProperty("request"))
                if (!$util.isString(message.request))
                    return "request: string expected";
            return null;
        };

        /**
         * Creates a C2M_TestRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.C2M_TestRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.C2M_TestRequest} C2M_TestRequest
         */
        C2M_TestRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.C2M_TestRequest)
                return object;
            var message = new $root.NiceET.C2M_TestRequest();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.ActorId != null)
                if ($util.Long)
                    (message.ActorId = $util.Long.fromValue(object.ActorId)).unsigned = false;
                else if (typeof object.ActorId === "string")
                    message.ActorId = parseInt(object.ActorId, 10);
                else if (typeof object.ActorId === "number")
                    message.ActorId = object.ActorId;
                else if (typeof object.ActorId === "object")
                    message.ActorId = new $util.LongBits(object.ActorId.low >>> 0, object.ActorId.high >>> 0).toNumber();
            if (object.request != null)
                message.request = String(object.request);
            return message;
        };

        /**
         * Creates a plain object from a C2M_TestRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.C2M_TestRequest
         * @static
         * @param {NiceET.C2M_TestRequest} message C2M_TestRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2M_TestRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.request = "";
                object.RpcId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ActorId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ActorId = options.longs === String ? "0" : 0;
            }
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = message.request;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (typeof message.ActorId === "number")
                    object.ActorId = options.longs === String ? String(message.ActorId) : message.ActorId;
                else
                    object.ActorId = options.longs === String ? $util.Long.prototype.toString.call(message.ActorId) : options.longs === Number ? new $util.LongBits(message.ActorId.low >>> 0, message.ActorId.high >>> 0).toNumber() : message.ActorId;
            return object;
        };

        /**
         * Converts this C2M_TestRequest to JSON.
         * @function toJSON
         * @memberof NiceET.C2M_TestRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2M_TestRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2M_TestRequest;
    })();

    NiceET.M2C_TestResponse = (function() {

        /**
         * Properties of a M2C_TestResponse.
         * @memberof NiceET
         * @interface IM2C_TestResponse
         * @property {number|null} [RpcId] M2C_TestResponse RpcId
         * @property {number|null} [Error] M2C_TestResponse Error
         * @property {string|null} [Message] M2C_TestResponse Message
         * @property {string|null} [response] M2C_TestResponse response
         */

        /**
         * Constructs a new M2C_TestResponse.
         * @memberof NiceET
         * @classdesc Represents a M2C_TestResponse.
         * @implements IM2C_TestResponse
         * @constructor
         * @param {NiceET.IM2C_TestResponse=} [properties] Properties to set
         */
        function M2C_TestResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * M2C_TestResponse RpcId.
         * @member {number} RpcId
         * @memberof NiceET.M2C_TestResponse
         * @instance
         */
        M2C_TestResponse.prototype.RpcId = 0;

        /**
         * M2C_TestResponse Error.
         * @member {number} Error
         * @memberof NiceET.M2C_TestResponse
         * @instance
         */
        M2C_TestResponse.prototype.Error = 0;

        /**
         * M2C_TestResponse Message.
         * @member {string} Message
         * @memberof NiceET.M2C_TestResponse
         * @instance
         */
        M2C_TestResponse.prototype.Message = "";

        /**
         * M2C_TestResponse response.
         * @member {string} response
         * @memberof NiceET.M2C_TestResponse
         * @instance
         */
        M2C_TestResponse.prototype.response = "";

        /**
         * Creates a new M2C_TestResponse instance using the specified properties.
         * @function create
         * @memberof NiceET.M2C_TestResponse
         * @static
         * @param {NiceET.IM2C_TestResponse=} [properties] Properties to set
         * @returns {NiceET.M2C_TestResponse} M2C_TestResponse instance
         */
        M2C_TestResponse.create = function create(properties) {
            return new M2C_TestResponse(properties);
        };

        /**
         * Encodes the specified M2C_TestResponse message. Does not implicitly {@link NiceET.M2C_TestResponse.verify|verify} messages.
         * @function encode
         * @memberof NiceET.M2C_TestResponse
         * @static
         * @param {NiceET.IM2C_TestResponse} message M2C_TestResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_TestResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.response != null && message.hasOwnProperty("response"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.response);
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified M2C_TestResponse message, length delimited. Does not implicitly {@link NiceET.M2C_TestResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.M2C_TestResponse
         * @static
         * @param {NiceET.IM2C_TestResponse} message M2C_TestResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_TestResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a M2C_TestResponse message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.M2C_TestResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.M2C_TestResponse} M2C_TestResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_TestResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.M2C_TestResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 91:
                    message.Error = reader.int32();
                    break;
                case 92:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.response = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a M2C_TestResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.M2C_TestResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.M2C_TestResponse} M2C_TestResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_TestResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a M2C_TestResponse message.
         * @function verify
         * @memberof NiceET.M2C_TestResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        M2C_TestResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.response != null && message.hasOwnProperty("response"))
                if (!$util.isString(message.response))
                    return "response: string expected";
            return null;
        };

        /**
         * Creates a M2C_TestResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.M2C_TestResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.M2C_TestResponse} M2C_TestResponse
         */
        M2C_TestResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.M2C_TestResponse)
                return object;
            var message = new $root.NiceET.M2C_TestResponse();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.response != null)
                message.response = String(object.response);
            return message;
        };

        /**
         * Creates a plain object from a M2C_TestResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.M2C_TestResponse
         * @static
         * @param {NiceET.M2C_TestResponse} message M2C_TestResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        M2C_TestResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.response = "";
                object.RpcId = 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = message.response;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this M2C_TestResponse to JSON.
         * @function toJSON
         * @memberof NiceET.M2C_TestResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        M2C_TestResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return M2C_TestResponse;
    })();

    NiceET.Actor_TransferRequest = (function() {

        /**
         * Properties of an Actor_TransferRequest.
         * @memberof NiceET
         * @interface IActor_TransferRequest
         * @property {number|null} [RpcId] Actor_TransferRequest RpcId
         * @property {number|Long|null} [ActorId] Actor_TransferRequest ActorId
         * @property {number|null} [MapIndex] Actor_TransferRequest MapIndex
         */

        /**
         * Constructs a new Actor_TransferRequest.
         * @memberof NiceET
         * @classdesc Represents an Actor_TransferRequest.
         * @implements IActor_TransferRequest
         * @constructor
         * @param {NiceET.IActor_TransferRequest=} [properties] Properties to set
         */
        function Actor_TransferRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_TransferRequest RpcId.
         * @member {number} RpcId
         * @memberof NiceET.Actor_TransferRequest
         * @instance
         */
        Actor_TransferRequest.prototype.RpcId = 0;

        /**
         * Actor_TransferRequest ActorId.
         * @member {number|Long} ActorId
         * @memberof NiceET.Actor_TransferRequest
         * @instance
         */
        Actor_TransferRequest.prototype.ActorId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Actor_TransferRequest MapIndex.
         * @member {number} MapIndex
         * @memberof NiceET.Actor_TransferRequest
         * @instance
         */
        Actor_TransferRequest.prototype.MapIndex = 0;

        /**
         * Creates a new Actor_TransferRequest instance using the specified properties.
         * @function create
         * @memberof NiceET.Actor_TransferRequest
         * @static
         * @param {NiceET.IActor_TransferRequest=} [properties] Properties to set
         * @returns {NiceET.Actor_TransferRequest} Actor_TransferRequest instance
         */
        Actor_TransferRequest.create = function create(properties) {
            return new Actor_TransferRequest(properties);
        };

        /**
         * Encodes the specified Actor_TransferRequest message. Does not implicitly {@link NiceET.Actor_TransferRequest.verify|verify} messages.
         * @function encode
         * @memberof NiceET.Actor_TransferRequest
         * @static
         * @param {NiceET.IActor_TransferRequest} message Actor_TransferRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_TransferRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MapIndex != null && message.hasOwnProperty("MapIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MapIndex);
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                writer.uint32(/* id 93, wireType 0 =*/744).sint64(message.ActorId);
            return writer;
        };

        /**
         * Encodes the specified Actor_TransferRequest message, length delimited. Does not implicitly {@link NiceET.Actor_TransferRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.Actor_TransferRequest
         * @static
         * @param {NiceET.IActor_TransferRequest} message Actor_TransferRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_TransferRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_TransferRequest message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.Actor_TransferRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.Actor_TransferRequest} Actor_TransferRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_TransferRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.Actor_TransferRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 93:
                    message.ActorId = reader.sint64();
                    break;
                case 1:
                    message.MapIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_TransferRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.Actor_TransferRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.Actor_TransferRequest} Actor_TransferRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_TransferRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_TransferRequest message.
         * @function verify
         * @memberof NiceET.Actor_TransferRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_TransferRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (!$util.isInteger(message.ActorId) && !(message.ActorId && $util.isInteger(message.ActorId.low) && $util.isInteger(message.ActorId.high)))
                    return "ActorId: integer|Long expected";
            if (message.MapIndex != null && message.hasOwnProperty("MapIndex"))
                if (!$util.isInteger(message.MapIndex))
                    return "MapIndex: integer expected";
            return null;
        };

        /**
         * Creates an Actor_TransferRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.Actor_TransferRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.Actor_TransferRequest} Actor_TransferRequest
         */
        Actor_TransferRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.Actor_TransferRequest)
                return object;
            var message = new $root.NiceET.Actor_TransferRequest();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.ActorId != null)
                if ($util.Long)
                    (message.ActorId = $util.Long.fromValue(object.ActorId)).unsigned = false;
                else if (typeof object.ActorId === "string")
                    message.ActorId = parseInt(object.ActorId, 10);
                else if (typeof object.ActorId === "number")
                    message.ActorId = object.ActorId;
                else if (typeof object.ActorId === "object")
                    message.ActorId = new $util.LongBits(object.ActorId.low >>> 0, object.ActorId.high >>> 0).toNumber();
            if (object.MapIndex != null)
                message.MapIndex = object.MapIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from an Actor_TransferRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.Actor_TransferRequest
         * @static
         * @param {NiceET.Actor_TransferRequest} message Actor_TransferRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_TransferRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MapIndex = 0;
                object.RpcId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ActorId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ActorId = options.longs === String ? "0" : 0;
            }
            if (message.MapIndex != null && message.hasOwnProperty("MapIndex"))
                object.MapIndex = message.MapIndex;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (typeof message.ActorId === "number")
                    object.ActorId = options.longs === String ? String(message.ActorId) : message.ActorId;
                else
                    object.ActorId = options.longs === String ? $util.Long.prototype.toString.call(message.ActorId) : options.longs === Number ? new $util.LongBits(message.ActorId.low >>> 0, message.ActorId.high >>> 0).toNumber() : message.ActorId;
            return object;
        };

        /**
         * Converts this Actor_TransferRequest to JSON.
         * @function toJSON
         * @memberof NiceET.Actor_TransferRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_TransferRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_TransferRequest;
    })();

    NiceET.Actor_TransferResponse = (function() {

        /**
         * Properties of an Actor_TransferResponse.
         * @memberof NiceET
         * @interface IActor_TransferResponse
         * @property {number|null} [RpcId] Actor_TransferResponse RpcId
         * @property {number|null} [Error] Actor_TransferResponse Error
         * @property {string|null} [Message] Actor_TransferResponse Message
         */

        /**
         * Constructs a new Actor_TransferResponse.
         * @memberof NiceET
         * @classdesc Represents an Actor_TransferResponse.
         * @implements IActor_TransferResponse
         * @constructor
         * @param {NiceET.IActor_TransferResponse=} [properties] Properties to set
         */
        function Actor_TransferResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_TransferResponse RpcId.
         * @member {number} RpcId
         * @memberof NiceET.Actor_TransferResponse
         * @instance
         */
        Actor_TransferResponse.prototype.RpcId = 0;

        /**
         * Actor_TransferResponse Error.
         * @member {number} Error
         * @memberof NiceET.Actor_TransferResponse
         * @instance
         */
        Actor_TransferResponse.prototype.Error = 0;

        /**
         * Actor_TransferResponse Message.
         * @member {string} Message
         * @memberof NiceET.Actor_TransferResponse
         * @instance
         */
        Actor_TransferResponse.prototype.Message = "";

        /**
         * Creates a new Actor_TransferResponse instance using the specified properties.
         * @function create
         * @memberof NiceET.Actor_TransferResponse
         * @static
         * @param {NiceET.IActor_TransferResponse=} [properties] Properties to set
         * @returns {NiceET.Actor_TransferResponse} Actor_TransferResponse instance
         */
        Actor_TransferResponse.create = function create(properties) {
            return new Actor_TransferResponse(properties);
        };

        /**
         * Encodes the specified Actor_TransferResponse message. Does not implicitly {@link NiceET.Actor_TransferResponse.verify|verify} messages.
         * @function encode
         * @memberof NiceET.Actor_TransferResponse
         * @static
         * @param {NiceET.IActor_TransferResponse} message Actor_TransferResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_TransferResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified Actor_TransferResponse message, length delimited. Does not implicitly {@link NiceET.Actor_TransferResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.Actor_TransferResponse
         * @static
         * @param {NiceET.IActor_TransferResponse} message Actor_TransferResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_TransferResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_TransferResponse message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.Actor_TransferResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.Actor_TransferResponse} Actor_TransferResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_TransferResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.Actor_TransferResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 91:
                    message.Error = reader.int32();
                    break;
                case 92:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_TransferResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.Actor_TransferResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.Actor_TransferResponse} Actor_TransferResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_TransferResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_TransferResponse message.
         * @function verify
         * @memberof NiceET.Actor_TransferResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_TransferResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates an Actor_TransferResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.Actor_TransferResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.Actor_TransferResponse} Actor_TransferResponse
         */
        Actor_TransferResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.Actor_TransferResponse)
                return object;
            var message = new $root.NiceET.Actor_TransferResponse();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from an Actor_TransferResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.Actor_TransferResponse
         * @static
         * @param {NiceET.Actor_TransferResponse} message Actor_TransferResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_TransferResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RpcId = 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this Actor_TransferResponse to JSON.
         * @function toJSON
         * @memberof NiceET.Actor_TransferResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_TransferResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_TransferResponse;
    })();

    NiceET.C2G_EnterMap = (function() {

        /**
         * Properties of a C2G_EnterMap.
         * @memberof NiceET
         * @interface IC2G_EnterMap
         * @property {number|null} [RpcId] C2G_EnterMap RpcId
         */

        /**
         * Constructs a new C2G_EnterMap.
         * @memberof NiceET
         * @classdesc Represents a C2G_EnterMap.
         * @implements IC2G_EnterMap
         * @constructor
         * @param {NiceET.IC2G_EnterMap=} [properties] Properties to set
         */
        function C2G_EnterMap(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2G_EnterMap RpcId.
         * @member {number} RpcId
         * @memberof NiceET.C2G_EnterMap
         * @instance
         */
        C2G_EnterMap.prototype.RpcId = 0;

        /**
         * Creates a new C2G_EnterMap instance using the specified properties.
         * @function create
         * @memberof NiceET.C2G_EnterMap
         * @static
         * @param {NiceET.IC2G_EnterMap=} [properties] Properties to set
         * @returns {NiceET.C2G_EnterMap} C2G_EnterMap instance
         */
        C2G_EnterMap.create = function create(properties) {
            return new C2G_EnterMap(properties);
        };

        /**
         * Encodes the specified C2G_EnterMap message. Does not implicitly {@link NiceET.C2G_EnterMap.verify|verify} messages.
         * @function encode
         * @memberof NiceET.C2G_EnterMap
         * @static
         * @param {NiceET.IC2G_EnterMap} message C2G_EnterMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_EnterMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            return writer;
        };

        /**
         * Encodes the specified C2G_EnterMap message, length delimited. Does not implicitly {@link NiceET.C2G_EnterMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.C2G_EnterMap
         * @static
         * @param {NiceET.IC2G_EnterMap} message C2G_EnterMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_EnterMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2G_EnterMap message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.C2G_EnterMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.C2G_EnterMap} C2G_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_EnterMap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.C2G_EnterMap();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2G_EnterMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.C2G_EnterMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.C2G_EnterMap} C2G_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_EnterMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2G_EnterMap message.
         * @function verify
         * @memberof NiceET.C2G_EnterMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2G_EnterMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            return null;
        };

        /**
         * Creates a C2G_EnterMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.C2G_EnterMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.C2G_EnterMap} C2G_EnterMap
         */
        C2G_EnterMap.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.C2G_EnterMap)
                return object;
            var message = new $root.NiceET.C2G_EnterMap();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            return message;
        };

        /**
         * Creates a plain object from a C2G_EnterMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.C2G_EnterMap
         * @static
         * @param {NiceET.C2G_EnterMap} message C2G_EnterMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2G_EnterMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.RpcId = 0;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            return object;
        };

        /**
         * Converts this C2G_EnterMap to JSON.
         * @function toJSON
         * @memberof NiceET.C2G_EnterMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2G_EnterMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2G_EnterMap;
    })();

    NiceET.G2C_EnterMap = (function() {

        /**
         * Properties of a G2C_EnterMap.
         * @memberof NiceET
         * @interface IG2C_EnterMap
         * @property {number|null} [RpcId] G2C_EnterMap RpcId
         * @property {number|null} [Error] G2C_EnterMap Error
         * @property {string|null} [Message] G2C_EnterMap Message
         * @property {number|Long|null} [UnitId] G2C_EnterMap UnitId
         * @property {Array.<NiceET.IUnitInfo>|null} [Units] G2C_EnterMap Units
         */

        /**
         * Constructs a new G2C_EnterMap.
         * @memberof NiceET
         * @classdesc Represents a G2C_EnterMap.
         * @implements IG2C_EnterMap
         * @constructor
         * @param {NiceET.IG2C_EnterMap=} [properties] Properties to set
         */
        function G2C_EnterMap(properties) {
            this.Units = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * G2C_EnterMap RpcId.
         * @member {number} RpcId
         * @memberof NiceET.G2C_EnterMap
         * @instance
         */
        G2C_EnterMap.prototype.RpcId = 0;

        /**
         * G2C_EnterMap Error.
         * @member {number} Error
         * @memberof NiceET.G2C_EnterMap
         * @instance
         */
        G2C_EnterMap.prototype.Error = 0;

        /**
         * G2C_EnterMap Message.
         * @member {string} Message
         * @memberof NiceET.G2C_EnterMap
         * @instance
         */
        G2C_EnterMap.prototype.Message = "";

        /**
         * G2C_EnterMap UnitId.
         * @member {number|Long} UnitId
         * @memberof NiceET.G2C_EnterMap
         * @instance
         */
        G2C_EnterMap.prototype.UnitId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * G2C_EnterMap Units.
         * @member {Array.<NiceET.IUnitInfo>} Units
         * @memberof NiceET.G2C_EnterMap
         * @instance
         */
        G2C_EnterMap.prototype.Units = $util.emptyArray;

        /**
         * Creates a new G2C_EnterMap instance using the specified properties.
         * @function create
         * @memberof NiceET.G2C_EnterMap
         * @static
         * @param {NiceET.IG2C_EnterMap=} [properties] Properties to set
         * @returns {NiceET.G2C_EnterMap} G2C_EnterMap instance
         */
        G2C_EnterMap.create = function create(properties) {
            return new G2C_EnterMap(properties);
        };

        /**
         * Encodes the specified G2C_EnterMap message. Does not implicitly {@link NiceET.G2C_EnterMap.verify|verify} messages.
         * @function encode
         * @memberof NiceET.G2C_EnterMap
         * @static
         * @param {NiceET.IG2C_EnterMap} message G2C_EnterMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_EnterMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UnitId != null && message.hasOwnProperty("UnitId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.UnitId);
            if (message.Units != null && message.Units.length)
                for (var i = 0; i < message.Units.length; ++i)
                    $root.NiceET.UnitInfo.encode(message.Units[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified G2C_EnterMap message, length delimited. Does not implicitly {@link NiceET.G2C_EnterMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.G2C_EnterMap
         * @static
         * @param {NiceET.IG2C_EnterMap} message G2C_EnterMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_EnterMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G2C_EnterMap message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.G2C_EnterMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.G2C_EnterMap} G2C_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_EnterMap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.G2C_EnterMap();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 91:
                    message.Error = reader.int32();
                    break;
                case 92:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.UnitId = reader.sint64();
                    break;
                case 2:
                    if (!(message.Units && message.Units.length))
                        message.Units = [];
                    message.Units.push($root.NiceET.UnitInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a G2C_EnterMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.G2C_EnterMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.G2C_EnterMap} G2C_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_EnterMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a G2C_EnterMap message.
         * @function verify
         * @memberof NiceET.G2C_EnterMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G2C_EnterMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.UnitId != null && message.hasOwnProperty("UnitId"))
                if (!$util.isInteger(message.UnitId) && !(message.UnitId && $util.isInteger(message.UnitId.low) && $util.isInteger(message.UnitId.high)))
                    return "UnitId: integer|Long expected";
            if (message.Units != null && message.hasOwnProperty("Units")) {
                if (!Array.isArray(message.Units))
                    return "Units: array expected";
                for (var i = 0; i < message.Units.length; ++i) {
                    var error = $root.NiceET.UnitInfo.verify(message.Units[i]);
                    if (error)
                        return "Units." + error;
                }
            }
            return null;
        };

        /**
         * Creates a G2C_EnterMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.G2C_EnterMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.G2C_EnterMap} G2C_EnterMap
         */
        G2C_EnterMap.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.G2C_EnterMap)
                return object;
            var message = new $root.NiceET.G2C_EnterMap();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.UnitId != null)
                if ($util.Long)
                    (message.UnitId = $util.Long.fromValue(object.UnitId)).unsigned = false;
                else if (typeof object.UnitId === "string")
                    message.UnitId = parseInt(object.UnitId, 10);
                else if (typeof object.UnitId === "number")
                    message.UnitId = object.UnitId;
                else if (typeof object.UnitId === "object")
                    message.UnitId = new $util.LongBits(object.UnitId.low >>> 0, object.UnitId.high >>> 0).toNumber();
            if (object.Units) {
                if (!Array.isArray(object.Units))
                    throw TypeError(".NiceET.G2C_EnterMap.Units: array expected");
                message.Units = [];
                for (var i = 0; i < object.Units.length; ++i) {
                    if (typeof object.Units[i] !== "object")
                        throw TypeError(".NiceET.G2C_EnterMap.Units: object expected");
                    message.Units[i] = $root.NiceET.UnitInfo.fromObject(object.Units[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a G2C_EnterMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.G2C_EnterMap
         * @static
         * @param {NiceET.G2C_EnterMap} message G2C_EnterMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        G2C_EnterMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Units = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UnitId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UnitId = options.longs === String ? "0" : 0;
                object.RpcId = 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.UnitId != null && message.hasOwnProperty("UnitId"))
                if (typeof message.UnitId === "number")
                    object.UnitId = options.longs === String ? String(message.UnitId) : message.UnitId;
                else
                    object.UnitId = options.longs === String ? $util.Long.prototype.toString.call(message.UnitId) : options.longs === Number ? new $util.LongBits(message.UnitId.low >>> 0, message.UnitId.high >>> 0).toNumber() : message.UnitId;
            if (message.Units && message.Units.length) {
                object.Units = [];
                for (var j = 0; j < message.Units.length; ++j)
                    object.Units[j] = $root.NiceET.UnitInfo.toObject(message.Units[j], options);
            }
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this G2C_EnterMap to JSON.
         * @function toJSON
         * @memberof NiceET.G2C_EnterMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G2C_EnterMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G2C_EnterMap;
    })();

    NiceET.UnitInfo = (function() {

        /**
         * Properties of an UnitInfo.
         * @memberof NiceET
         * @interface IUnitInfo
         * @property {number|Long|null} [UnitId] UnitInfo UnitId
         * @property {number|null} [X] UnitInfo X
         * @property {number|null} [Y] UnitInfo Y
         * @property {number|null} [Z] UnitInfo Z
         */

        /**
         * Constructs a new UnitInfo.
         * @memberof NiceET
         * @classdesc Represents an UnitInfo.
         * @implements IUnitInfo
         * @constructor
         * @param {NiceET.IUnitInfo=} [properties] Properties to set
         */
        function UnitInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnitInfo UnitId.
         * @member {number|Long} UnitId
         * @memberof NiceET.UnitInfo
         * @instance
         */
        UnitInfo.prototype.UnitId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UnitInfo X.
         * @member {number} X
         * @memberof NiceET.UnitInfo
         * @instance
         */
        UnitInfo.prototype.X = 0;

        /**
         * UnitInfo Y.
         * @member {number} Y
         * @memberof NiceET.UnitInfo
         * @instance
         */
        UnitInfo.prototype.Y = 0;

        /**
         * UnitInfo Z.
         * @member {number} Z
         * @memberof NiceET.UnitInfo
         * @instance
         */
        UnitInfo.prototype.Z = 0;

        /**
         * Creates a new UnitInfo instance using the specified properties.
         * @function create
         * @memberof NiceET.UnitInfo
         * @static
         * @param {NiceET.IUnitInfo=} [properties] Properties to set
         * @returns {NiceET.UnitInfo} UnitInfo instance
         */
        UnitInfo.create = function create(properties) {
            return new UnitInfo(properties);
        };

        /**
         * Encodes the specified UnitInfo message. Does not implicitly {@link NiceET.UnitInfo.verify|verify} messages.
         * @function encode
         * @memberof NiceET.UnitInfo
         * @static
         * @param {NiceET.IUnitInfo} message UnitInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnitInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UnitId != null && message.hasOwnProperty("UnitId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.UnitId);
            if (message.X != null && message.hasOwnProperty("X"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.X);
            if (message.Y != null && message.hasOwnProperty("Y"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.Y);
            if (message.Z != null && message.hasOwnProperty("Z"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.Z);
            return writer;
        };

        /**
         * Encodes the specified UnitInfo message, length delimited. Does not implicitly {@link NiceET.UnitInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.UnitInfo
         * @static
         * @param {NiceET.IUnitInfo} message UnitInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnitInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnitInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.UnitInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.UnitInfo} UnitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnitInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.UnitInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UnitId = reader.sint64();
                    break;
                case 2:
                    message.X = reader.float();
                    break;
                case 3:
                    message.Y = reader.float();
                    break;
                case 4:
                    message.Z = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UnitInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.UnitInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.UnitInfo} UnitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnitInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnitInfo message.
         * @function verify
         * @memberof NiceET.UnitInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnitInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UnitId != null && message.hasOwnProperty("UnitId"))
                if (!$util.isInteger(message.UnitId) && !(message.UnitId && $util.isInteger(message.UnitId.low) && $util.isInteger(message.UnitId.high)))
                    return "UnitId: integer|Long expected";
            if (message.X != null && message.hasOwnProperty("X"))
                if (typeof message.X !== "number")
                    return "X: number expected";
            if (message.Y != null && message.hasOwnProperty("Y"))
                if (typeof message.Y !== "number")
                    return "Y: number expected";
            if (message.Z != null && message.hasOwnProperty("Z"))
                if (typeof message.Z !== "number")
                    return "Z: number expected";
            return null;
        };

        /**
         * Creates an UnitInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.UnitInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.UnitInfo} UnitInfo
         */
        UnitInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.UnitInfo)
                return object;
            var message = new $root.NiceET.UnitInfo();
            if (object.UnitId != null)
                if ($util.Long)
                    (message.UnitId = $util.Long.fromValue(object.UnitId)).unsigned = false;
                else if (typeof object.UnitId === "string")
                    message.UnitId = parseInt(object.UnitId, 10);
                else if (typeof object.UnitId === "number")
                    message.UnitId = object.UnitId;
                else if (typeof object.UnitId === "object")
                    message.UnitId = new $util.LongBits(object.UnitId.low >>> 0, object.UnitId.high >>> 0).toNumber();
            if (object.X != null)
                message.X = Number(object.X);
            if (object.Y != null)
                message.Y = Number(object.Y);
            if (object.Z != null)
                message.Z = Number(object.Z);
            return message;
        };

        /**
         * Creates a plain object from an UnitInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.UnitInfo
         * @static
         * @param {NiceET.UnitInfo} message UnitInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnitInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UnitId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UnitId = options.longs === String ? "0" : 0;
                object.X = 0;
                object.Y = 0;
                object.Z = 0;
            }
            if (message.UnitId != null && message.hasOwnProperty("UnitId"))
                if (typeof message.UnitId === "number")
                    object.UnitId = options.longs === String ? String(message.UnitId) : message.UnitId;
                else
                    object.UnitId = options.longs === String ? $util.Long.prototype.toString.call(message.UnitId) : options.longs === Number ? new $util.LongBits(message.UnitId.low >>> 0, message.UnitId.high >>> 0).toNumber() : message.UnitId;
            if (message.X != null && message.hasOwnProperty("X"))
                object.X = options.json && !isFinite(message.X) ? String(message.X) : message.X;
            if (message.Y != null && message.hasOwnProperty("Y"))
                object.Y = options.json && !isFinite(message.Y) ? String(message.Y) : message.Y;
            if (message.Z != null && message.hasOwnProperty("Z"))
                object.Z = options.json && !isFinite(message.Z) ? String(message.Z) : message.Z;
            return object;
        };

        /**
         * Converts this UnitInfo to JSON.
         * @function toJSON
         * @memberof NiceET.UnitInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnitInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnitInfo;
    })();

    NiceET.M2C_CreateUnits = (function() {

        /**
         * Properties of a M2C_CreateUnits.
         * @memberof NiceET
         * @interface IM2C_CreateUnits
         * @property {number|null} [RpcId] M2C_CreateUnits RpcId
         * @property {number|Long|null} [ActorId] M2C_CreateUnits ActorId
         * @property {Array.<NiceET.IUnitInfo>|null} [Units] M2C_CreateUnits Units
         */

        /**
         * Constructs a new M2C_CreateUnits.
         * @memberof NiceET
         * @classdesc Represents a M2C_CreateUnits.
         * @implements IM2C_CreateUnits
         * @constructor
         * @param {NiceET.IM2C_CreateUnits=} [properties] Properties to set
         */
        function M2C_CreateUnits(properties) {
            this.Units = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * M2C_CreateUnits RpcId.
         * @member {number} RpcId
         * @memberof NiceET.M2C_CreateUnits
         * @instance
         */
        M2C_CreateUnits.prototype.RpcId = 0;

        /**
         * M2C_CreateUnits ActorId.
         * @member {number|Long} ActorId
         * @memberof NiceET.M2C_CreateUnits
         * @instance
         */
        M2C_CreateUnits.prototype.ActorId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * M2C_CreateUnits Units.
         * @member {Array.<NiceET.IUnitInfo>} Units
         * @memberof NiceET.M2C_CreateUnits
         * @instance
         */
        M2C_CreateUnits.prototype.Units = $util.emptyArray;

        /**
         * Creates a new M2C_CreateUnits instance using the specified properties.
         * @function create
         * @memberof NiceET.M2C_CreateUnits
         * @static
         * @param {NiceET.IM2C_CreateUnits=} [properties] Properties to set
         * @returns {NiceET.M2C_CreateUnits} M2C_CreateUnits instance
         */
        M2C_CreateUnits.create = function create(properties) {
            return new M2C_CreateUnits(properties);
        };

        /**
         * Encodes the specified M2C_CreateUnits message. Does not implicitly {@link NiceET.M2C_CreateUnits.verify|verify} messages.
         * @function encode
         * @memberof NiceET.M2C_CreateUnits
         * @static
         * @param {NiceET.IM2C_CreateUnits} message M2C_CreateUnits message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_CreateUnits.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Units != null && message.Units.length)
                for (var i = 0; i < message.Units.length; ++i)
                    $root.NiceET.UnitInfo.encode(message.Units[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                writer.uint32(/* id 93, wireType 0 =*/744).sint64(message.ActorId);
            return writer;
        };

        /**
         * Encodes the specified M2C_CreateUnits message, length delimited. Does not implicitly {@link NiceET.M2C_CreateUnits.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.M2C_CreateUnits
         * @static
         * @param {NiceET.IM2C_CreateUnits} message M2C_CreateUnits message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_CreateUnits.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a M2C_CreateUnits message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.M2C_CreateUnits
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.M2C_CreateUnits} M2C_CreateUnits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_CreateUnits.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.M2C_CreateUnits();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 93:
                    message.ActorId = reader.sint64();
                    break;
                case 1:
                    if (!(message.Units && message.Units.length))
                        message.Units = [];
                    message.Units.push($root.NiceET.UnitInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a M2C_CreateUnits message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.M2C_CreateUnits
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.M2C_CreateUnits} M2C_CreateUnits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_CreateUnits.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a M2C_CreateUnits message.
         * @function verify
         * @memberof NiceET.M2C_CreateUnits
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        M2C_CreateUnits.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (!$util.isInteger(message.ActorId) && !(message.ActorId && $util.isInteger(message.ActorId.low) && $util.isInteger(message.ActorId.high)))
                    return "ActorId: integer|Long expected";
            if (message.Units != null && message.hasOwnProperty("Units")) {
                if (!Array.isArray(message.Units))
                    return "Units: array expected";
                for (var i = 0; i < message.Units.length; ++i) {
                    var error = $root.NiceET.UnitInfo.verify(message.Units[i]);
                    if (error)
                        return "Units." + error;
                }
            }
            return null;
        };

        /**
         * Creates a M2C_CreateUnits message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.M2C_CreateUnits
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.M2C_CreateUnits} M2C_CreateUnits
         */
        M2C_CreateUnits.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.M2C_CreateUnits)
                return object;
            var message = new $root.NiceET.M2C_CreateUnits();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.ActorId != null)
                if ($util.Long)
                    (message.ActorId = $util.Long.fromValue(object.ActorId)).unsigned = false;
                else if (typeof object.ActorId === "string")
                    message.ActorId = parseInt(object.ActorId, 10);
                else if (typeof object.ActorId === "number")
                    message.ActorId = object.ActorId;
                else if (typeof object.ActorId === "object")
                    message.ActorId = new $util.LongBits(object.ActorId.low >>> 0, object.ActorId.high >>> 0).toNumber();
            if (object.Units) {
                if (!Array.isArray(object.Units))
                    throw TypeError(".NiceET.M2C_CreateUnits.Units: array expected");
                message.Units = [];
                for (var i = 0; i < object.Units.length; ++i) {
                    if (typeof object.Units[i] !== "object")
                        throw TypeError(".NiceET.M2C_CreateUnits.Units: object expected");
                    message.Units[i] = $root.NiceET.UnitInfo.fromObject(object.Units[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a M2C_CreateUnits message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.M2C_CreateUnits
         * @static
         * @param {NiceET.M2C_CreateUnits} message M2C_CreateUnits
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        M2C_CreateUnits.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Units = [];
            if (options.defaults) {
                object.RpcId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ActorId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ActorId = options.longs === String ? "0" : 0;
            }
            if (message.Units && message.Units.length) {
                object.Units = [];
                for (var j = 0; j < message.Units.length; ++j)
                    object.Units[j] = $root.NiceET.UnitInfo.toObject(message.Units[j], options);
            }
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (typeof message.ActorId === "number")
                    object.ActorId = options.longs === String ? String(message.ActorId) : message.ActorId;
                else
                    object.ActorId = options.longs === String ? $util.Long.prototype.toString.call(message.ActorId) : options.longs === Number ? new $util.LongBits(message.ActorId.low >>> 0, message.ActorId.high >>> 0).toNumber() : message.ActorId;
            return object;
        };

        /**
         * Converts this M2C_CreateUnits to JSON.
         * @function toJSON
         * @memberof NiceET.M2C_CreateUnits
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        M2C_CreateUnits.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return M2C_CreateUnits;
    })();

    NiceET.Frame_ClickMap = (function() {

        /**
         * Properties of a Frame_ClickMap.
         * @memberof NiceET
         * @interface IFrame_ClickMap
         * @property {number|null} [RpcId] Frame_ClickMap RpcId
         * @property {number|Long|null} [ActorId] Frame_ClickMap ActorId
         * @property {number|Long|null} [Id] Frame_ClickMap Id
         * @property {number|null} [X] Frame_ClickMap X
         * @property {number|null} [Y] Frame_ClickMap Y
         * @property {number|null} [Z] Frame_ClickMap Z
         */

        /**
         * Constructs a new Frame_ClickMap.
         * @memberof NiceET
         * @classdesc Represents a Frame_ClickMap.
         * @implements IFrame_ClickMap
         * @constructor
         * @param {NiceET.IFrame_ClickMap=} [properties] Properties to set
         */
        function Frame_ClickMap(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Frame_ClickMap RpcId.
         * @member {number} RpcId
         * @memberof NiceET.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.RpcId = 0;

        /**
         * Frame_ClickMap ActorId.
         * @member {number|Long} ActorId
         * @memberof NiceET.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.ActorId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Frame_ClickMap Id.
         * @member {number|Long} Id
         * @memberof NiceET.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Frame_ClickMap X.
         * @member {number} X
         * @memberof NiceET.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.X = 0;

        /**
         * Frame_ClickMap Y.
         * @member {number} Y
         * @memberof NiceET.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.Y = 0;

        /**
         * Frame_ClickMap Z.
         * @member {number} Z
         * @memberof NiceET.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.Z = 0;

        /**
         * Creates a new Frame_ClickMap instance using the specified properties.
         * @function create
         * @memberof NiceET.Frame_ClickMap
         * @static
         * @param {NiceET.IFrame_ClickMap=} [properties] Properties to set
         * @returns {NiceET.Frame_ClickMap} Frame_ClickMap instance
         */
        Frame_ClickMap.create = function create(properties) {
            return new Frame_ClickMap(properties);
        };

        /**
         * Encodes the specified Frame_ClickMap message. Does not implicitly {@link NiceET.Frame_ClickMap.verify|verify} messages.
         * @function encode
         * @memberof NiceET.Frame_ClickMap
         * @static
         * @param {NiceET.IFrame_ClickMap} message Frame_ClickMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Frame_ClickMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.X != null && message.hasOwnProperty("X"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.X);
            if (message.Y != null && message.hasOwnProperty("Y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.Y);
            if (message.Z != null && message.hasOwnProperty("Z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.Z);
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                writer.uint32(/* id 93, wireType 0 =*/744).sint64(message.ActorId);
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 94, wireType 0 =*/752).sint64(message.Id);
            return writer;
        };

        /**
         * Encodes the specified Frame_ClickMap message, length delimited. Does not implicitly {@link NiceET.Frame_ClickMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.Frame_ClickMap
         * @static
         * @param {NiceET.IFrame_ClickMap} message Frame_ClickMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Frame_ClickMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Frame_ClickMap message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.Frame_ClickMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.Frame_ClickMap} Frame_ClickMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Frame_ClickMap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.Frame_ClickMap();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 93:
                    message.ActorId = reader.sint64();
                    break;
                case 94:
                    message.Id = reader.sint64();
                    break;
                case 1:
                    message.X = reader.float();
                    break;
                case 2:
                    message.Y = reader.float();
                    break;
                case 3:
                    message.Z = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Frame_ClickMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.Frame_ClickMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.Frame_ClickMap} Frame_ClickMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Frame_ClickMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Frame_ClickMap message.
         * @function verify
         * @memberof NiceET.Frame_ClickMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Frame_ClickMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (!$util.isInteger(message.ActorId) && !(message.ActorId && $util.isInteger(message.ActorId.low) && $util.isInteger(message.ActorId.high)))
                    return "ActorId: integer|Long expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                    return "Id: integer|Long expected";
            if (message.X != null && message.hasOwnProperty("X"))
                if (typeof message.X !== "number")
                    return "X: number expected";
            if (message.Y != null && message.hasOwnProperty("Y"))
                if (typeof message.Y !== "number")
                    return "Y: number expected";
            if (message.Z != null && message.hasOwnProperty("Z"))
                if (typeof message.Z !== "number")
                    return "Z: number expected";
            return null;
        };

        /**
         * Creates a Frame_ClickMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.Frame_ClickMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.Frame_ClickMap} Frame_ClickMap
         */
        Frame_ClickMap.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.Frame_ClickMap)
                return object;
            var message = new $root.NiceET.Frame_ClickMap();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.ActorId != null)
                if ($util.Long)
                    (message.ActorId = $util.Long.fromValue(object.ActorId)).unsigned = false;
                else if (typeof object.ActorId === "string")
                    message.ActorId = parseInt(object.ActorId, 10);
                else if (typeof object.ActorId === "number")
                    message.ActorId = object.ActorId;
                else if (typeof object.ActorId === "object")
                    message.ActorId = new $util.LongBits(object.ActorId.low >>> 0, object.ActorId.high >>> 0).toNumber();
            if (object.Id != null)
                if ($util.Long)
                    (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
                else if (typeof object.Id === "string")
                    message.Id = parseInt(object.Id, 10);
                else if (typeof object.Id === "number")
                    message.Id = object.Id;
                else if (typeof object.Id === "object")
                    message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
            if (object.X != null)
                message.X = Number(object.X);
            if (object.Y != null)
                message.Y = Number(object.Y);
            if (object.Z != null)
                message.Z = Number(object.Z);
            return message;
        };

        /**
         * Creates a plain object from a Frame_ClickMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.Frame_ClickMap
         * @static
         * @param {NiceET.Frame_ClickMap} message Frame_ClickMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Frame_ClickMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.X = 0;
                object.Y = 0;
                object.Z = 0;
                object.RpcId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ActorId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ActorId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Id = options.longs === String ? "0" : 0;
            }
            if (message.X != null && message.hasOwnProperty("X"))
                object.X = options.json && !isFinite(message.X) ? String(message.X) : message.X;
            if (message.Y != null && message.hasOwnProperty("Y"))
                object.Y = options.json && !isFinite(message.Y) ? String(message.Y) : message.Y;
            if (message.Z != null && message.hasOwnProperty("Z"))
                object.Z = options.json && !isFinite(message.Z) ? String(message.Z) : message.Z;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (typeof message.ActorId === "number")
                    object.ActorId = options.longs === String ? String(message.ActorId) : message.ActorId;
                else
                    object.ActorId = options.longs === String ? $util.Long.prototype.toString.call(message.ActorId) : options.longs === Number ? new $util.LongBits(message.ActorId.low >>> 0, message.ActorId.high >>> 0).toNumber() : message.ActorId;
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (typeof message.Id === "number")
                    object.Id = options.longs === String ? String(message.Id) : message.Id;
                else
                    object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
            return object;
        };

        /**
         * Converts this Frame_ClickMap to JSON.
         * @function toJSON
         * @memberof NiceET.Frame_ClickMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Frame_ClickMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Frame_ClickMap;
    })();

    NiceET.M2C_PathfindingResult = (function() {

        /**
         * Properties of a M2C_PathfindingResult.
         * @memberof NiceET
         * @interface IM2C_PathfindingResult
         * @property {number|Long|null} [ActorId] M2C_PathfindingResult ActorId
         * @property {number|Long|null} [Id] M2C_PathfindingResult Id
         * @property {number|null} [X] M2C_PathfindingResult X
         * @property {number|null} [Y] M2C_PathfindingResult Y
         * @property {number|null} [Z] M2C_PathfindingResult Z
         * @property {Array.<number>|null} [Xs] M2C_PathfindingResult Xs
         * @property {Array.<number>|null} [Ys] M2C_PathfindingResult Ys
         * @property {Array.<number>|null} [Zs] M2C_PathfindingResult Zs
         */

        /**
         * Constructs a new M2C_PathfindingResult.
         * @memberof NiceET
         * @classdesc Represents a M2C_PathfindingResult.
         * @implements IM2C_PathfindingResult
         * @constructor
         * @param {NiceET.IM2C_PathfindingResult=} [properties] Properties to set
         */
        function M2C_PathfindingResult(properties) {
            this.Xs = [];
            this.Ys = [];
            this.Zs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * M2C_PathfindingResult ActorId.
         * @member {number|Long} ActorId
         * @memberof NiceET.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.ActorId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * M2C_PathfindingResult Id.
         * @member {number|Long} Id
         * @memberof NiceET.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * M2C_PathfindingResult X.
         * @member {number} X
         * @memberof NiceET.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.X = 0;

        /**
         * M2C_PathfindingResult Y.
         * @member {number} Y
         * @memberof NiceET.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Y = 0;

        /**
         * M2C_PathfindingResult Z.
         * @member {number} Z
         * @memberof NiceET.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Z = 0;

        /**
         * M2C_PathfindingResult Xs.
         * @member {Array.<number>} Xs
         * @memberof NiceET.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Xs = $util.emptyArray;

        /**
         * M2C_PathfindingResult Ys.
         * @member {Array.<number>} Ys
         * @memberof NiceET.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Ys = $util.emptyArray;

        /**
         * M2C_PathfindingResult Zs.
         * @member {Array.<number>} Zs
         * @memberof NiceET.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Zs = $util.emptyArray;

        /**
         * Creates a new M2C_PathfindingResult instance using the specified properties.
         * @function create
         * @memberof NiceET.M2C_PathfindingResult
         * @static
         * @param {NiceET.IM2C_PathfindingResult=} [properties] Properties to set
         * @returns {NiceET.M2C_PathfindingResult} M2C_PathfindingResult instance
         */
        M2C_PathfindingResult.create = function create(properties) {
            return new M2C_PathfindingResult(properties);
        };

        /**
         * Encodes the specified M2C_PathfindingResult message. Does not implicitly {@link NiceET.M2C_PathfindingResult.verify|verify} messages.
         * @function encode
         * @memberof NiceET.M2C_PathfindingResult
         * @static
         * @param {NiceET.IM2C_PathfindingResult} message M2C_PathfindingResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_PathfindingResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.Id);
            if (message.X != null && message.hasOwnProperty("X"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.X);
            if (message.Y != null && message.hasOwnProperty("Y"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.Y);
            if (message.Z != null && message.hasOwnProperty("Z"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.Z);
            if (message.Xs != null && message.Xs.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.Xs.length; ++i)
                    writer.float(message.Xs[i]);
                writer.ldelim();
            }
            if (message.Ys != null && message.Ys.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.Ys.length; ++i)
                    writer.float(message.Ys[i]);
                writer.ldelim();
            }
            if (message.Zs != null && message.Zs.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.Zs.length; ++i)
                    writer.float(message.Zs[i]);
                writer.ldelim();
            }
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                writer.uint32(/* id 93, wireType 0 =*/744).sint64(message.ActorId);
            return writer;
        };

        /**
         * Encodes the specified M2C_PathfindingResult message, length delimited. Does not implicitly {@link NiceET.M2C_PathfindingResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.M2C_PathfindingResult
         * @static
         * @param {NiceET.IM2C_PathfindingResult} message M2C_PathfindingResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_PathfindingResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a M2C_PathfindingResult message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.M2C_PathfindingResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.M2C_PathfindingResult} M2C_PathfindingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_PathfindingResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.M2C_PathfindingResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 93:
                    message.ActorId = reader.sint64();
                    break;
                case 1:
                    message.Id = reader.sint64();
                    break;
                case 2:
                    message.X = reader.float();
                    break;
                case 3:
                    message.Y = reader.float();
                    break;
                case 4:
                    message.Z = reader.float();
                    break;
                case 5:
                    if (!(message.Xs && message.Xs.length))
                        message.Xs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Xs.push(reader.float());
                    } else
                        message.Xs.push(reader.float());
                    break;
                case 6:
                    if (!(message.Ys && message.Ys.length))
                        message.Ys = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Ys.push(reader.float());
                    } else
                        message.Ys.push(reader.float());
                    break;
                case 7:
                    if (!(message.Zs && message.Zs.length))
                        message.Zs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Zs.push(reader.float());
                    } else
                        message.Zs.push(reader.float());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a M2C_PathfindingResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.M2C_PathfindingResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.M2C_PathfindingResult} M2C_PathfindingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_PathfindingResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a M2C_PathfindingResult message.
         * @function verify
         * @memberof NiceET.M2C_PathfindingResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        M2C_PathfindingResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (!$util.isInteger(message.ActorId) && !(message.ActorId && $util.isInteger(message.ActorId.low) && $util.isInteger(message.ActorId.high)))
                    return "ActorId: integer|Long expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                    return "Id: integer|Long expected";
            if (message.X != null && message.hasOwnProperty("X"))
                if (typeof message.X !== "number")
                    return "X: number expected";
            if (message.Y != null && message.hasOwnProperty("Y"))
                if (typeof message.Y !== "number")
                    return "Y: number expected";
            if (message.Z != null && message.hasOwnProperty("Z"))
                if (typeof message.Z !== "number")
                    return "Z: number expected";
            if (message.Xs != null && message.hasOwnProperty("Xs")) {
                if (!Array.isArray(message.Xs))
                    return "Xs: array expected";
                for (var i = 0; i < message.Xs.length; ++i)
                    if (typeof message.Xs[i] !== "number")
                        return "Xs: number[] expected";
            }
            if (message.Ys != null && message.hasOwnProperty("Ys")) {
                if (!Array.isArray(message.Ys))
                    return "Ys: array expected";
                for (var i = 0; i < message.Ys.length; ++i)
                    if (typeof message.Ys[i] !== "number")
                        return "Ys: number[] expected";
            }
            if (message.Zs != null && message.hasOwnProperty("Zs")) {
                if (!Array.isArray(message.Zs))
                    return "Zs: array expected";
                for (var i = 0; i < message.Zs.length; ++i)
                    if (typeof message.Zs[i] !== "number")
                        return "Zs: number[] expected";
            }
            return null;
        };

        /**
         * Creates a M2C_PathfindingResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.M2C_PathfindingResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.M2C_PathfindingResult} M2C_PathfindingResult
         */
        M2C_PathfindingResult.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.M2C_PathfindingResult)
                return object;
            var message = new $root.NiceET.M2C_PathfindingResult();
            if (object.ActorId != null)
                if ($util.Long)
                    (message.ActorId = $util.Long.fromValue(object.ActorId)).unsigned = false;
                else if (typeof object.ActorId === "string")
                    message.ActorId = parseInt(object.ActorId, 10);
                else if (typeof object.ActorId === "number")
                    message.ActorId = object.ActorId;
                else if (typeof object.ActorId === "object")
                    message.ActorId = new $util.LongBits(object.ActorId.low >>> 0, object.ActorId.high >>> 0).toNumber();
            if (object.Id != null)
                if ($util.Long)
                    (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
                else if (typeof object.Id === "string")
                    message.Id = parseInt(object.Id, 10);
                else if (typeof object.Id === "number")
                    message.Id = object.Id;
                else if (typeof object.Id === "object")
                    message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
            if (object.X != null)
                message.X = Number(object.X);
            if (object.Y != null)
                message.Y = Number(object.Y);
            if (object.Z != null)
                message.Z = Number(object.Z);
            if (object.Xs) {
                if (!Array.isArray(object.Xs))
                    throw TypeError(".NiceET.M2C_PathfindingResult.Xs: array expected");
                message.Xs = [];
                for (var i = 0; i < object.Xs.length; ++i)
                    message.Xs[i] = Number(object.Xs[i]);
            }
            if (object.Ys) {
                if (!Array.isArray(object.Ys))
                    throw TypeError(".NiceET.M2C_PathfindingResult.Ys: array expected");
                message.Ys = [];
                for (var i = 0; i < object.Ys.length; ++i)
                    message.Ys[i] = Number(object.Ys[i]);
            }
            if (object.Zs) {
                if (!Array.isArray(object.Zs))
                    throw TypeError(".NiceET.M2C_PathfindingResult.Zs: array expected");
                message.Zs = [];
                for (var i = 0; i < object.Zs.length; ++i)
                    message.Zs[i] = Number(object.Zs[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a M2C_PathfindingResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.M2C_PathfindingResult
         * @static
         * @param {NiceET.M2C_PathfindingResult} message M2C_PathfindingResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        M2C_PathfindingResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Xs = [];
                object.Ys = [];
                object.Zs = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Id = options.longs === String ? "0" : 0;
                object.X = 0;
                object.Y = 0;
                object.Z = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ActorId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ActorId = options.longs === String ? "0" : 0;
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (typeof message.Id === "number")
                    object.Id = options.longs === String ? String(message.Id) : message.Id;
                else
                    object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
            if (message.X != null && message.hasOwnProperty("X"))
                object.X = options.json && !isFinite(message.X) ? String(message.X) : message.X;
            if (message.Y != null && message.hasOwnProperty("Y"))
                object.Y = options.json && !isFinite(message.Y) ? String(message.Y) : message.Y;
            if (message.Z != null && message.hasOwnProperty("Z"))
                object.Z = options.json && !isFinite(message.Z) ? String(message.Z) : message.Z;
            if (message.Xs && message.Xs.length) {
                object.Xs = [];
                for (var j = 0; j < message.Xs.length; ++j)
                    object.Xs[j] = options.json && !isFinite(message.Xs[j]) ? String(message.Xs[j]) : message.Xs[j];
            }
            if (message.Ys && message.Ys.length) {
                object.Ys = [];
                for (var j = 0; j < message.Ys.length; ++j)
                    object.Ys[j] = options.json && !isFinite(message.Ys[j]) ? String(message.Ys[j]) : message.Ys[j];
            }
            if (message.Zs && message.Zs.length) {
                object.Zs = [];
                for (var j = 0; j < message.Zs.length; ++j)
                    object.Zs[j] = options.json && !isFinite(message.Zs[j]) ? String(message.Zs[j]) : message.Zs[j];
            }
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (typeof message.ActorId === "number")
                    object.ActorId = options.longs === String ? String(message.ActorId) : message.ActorId;
                else
                    object.ActorId = options.longs === String ? $util.Long.prototype.toString.call(message.ActorId) : options.longs === Number ? new $util.LongBits(message.ActorId.low >>> 0, message.ActorId.high >>> 0).toNumber() : message.ActorId;
            return object;
        };

        /**
         * Converts this M2C_PathfindingResult to JSON.
         * @function toJSON
         * @memberof NiceET.M2C_PathfindingResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        M2C_PathfindingResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return M2C_PathfindingResult;
    })();

    NiceET.C2R_Ping = (function() {

        /**
         * Properties of a C2R_Ping.
         * @memberof NiceET
         * @interface IC2R_Ping
         * @property {number|null} [RpcId] C2R_Ping RpcId
         */

        /**
         * Constructs a new C2R_Ping.
         * @memberof NiceET
         * @classdesc Represents a C2R_Ping.
         * @implements IC2R_Ping
         * @constructor
         * @param {NiceET.IC2R_Ping=} [properties] Properties to set
         */
        function C2R_Ping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2R_Ping RpcId.
         * @member {number} RpcId
         * @memberof NiceET.C2R_Ping
         * @instance
         */
        C2R_Ping.prototype.RpcId = 0;

        /**
         * Creates a new C2R_Ping instance using the specified properties.
         * @function create
         * @memberof NiceET.C2R_Ping
         * @static
         * @param {NiceET.IC2R_Ping=} [properties] Properties to set
         * @returns {NiceET.C2R_Ping} C2R_Ping instance
         */
        C2R_Ping.create = function create(properties) {
            return new C2R_Ping(properties);
        };

        /**
         * Encodes the specified C2R_Ping message. Does not implicitly {@link NiceET.C2R_Ping.verify|verify} messages.
         * @function encode
         * @memberof NiceET.C2R_Ping
         * @static
         * @param {NiceET.IC2R_Ping} message C2R_Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2R_Ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            return writer;
        };

        /**
         * Encodes the specified C2R_Ping message, length delimited. Does not implicitly {@link NiceET.C2R_Ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.C2R_Ping
         * @static
         * @param {NiceET.IC2R_Ping} message C2R_Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2R_Ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2R_Ping message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.C2R_Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.C2R_Ping} C2R_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2R_Ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.C2R_Ping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2R_Ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.C2R_Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.C2R_Ping} C2R_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2R_Ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2R_Ping message.
         * @function verify
         * @memberof NiceET.C2R_Ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2R_Ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            return null;
        };

        /**
         * Creates a C2R_Ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.C2R_Ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.C2R_Ping} C2R_Ping
         */
        C2R_Ping.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.C2R_Ping)
                return object;
            var message = new $root.NiceET.C2R_Ping();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            return message;
        };

        /**
         * Creates a plain object from a C2R_Ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.C2R_Ping
         * @static
         * @param {NiceET.C2R_Ping} message C2R_Ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2R_Ping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.RpcId = 0;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            return object;
        };

        /**
         * Converts this C2R_Ping to JSON.
         * @function toJSON
         * @memberof NiceET.C2R_Ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2R_Ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2R_Ping;
    })();

    NiceET.R2C_Ping = (function() {

        /**
         * Properties of a R2C_Ping.
         * @memberof NiceET
         * @interface IR2C_Ping
         * @property {number|null} [RpcId] R2C_Ping RpcId
         * @property {number|null} [Error] R2C_Ping Error
         * @property {string|null} [Message] R2C_Ping Message
         */

        /**
         * Constructs a new R2C_Ping.
         * @memberof NiceET
         * @classdesc Represents a R2C_Ping.
         * @implements IR2C_Ping
         * @constructor
         * @param {NiceET.IR2C_Ping=} [properties] Properties to set
         */
        function R2C_Ping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * R2C_Ping RpcId.
         * @member {number} RpcId
         * @memberof NiceET.R2C_Ping
         * @instance
         */
        R2C_Ping.prototype.RpcId = 0;

        /**
         * R2C_Ping Error.
         * @member {number} Error
         * @memberof NiceET.R2C_Ping
         * @instance
         */
        R2C_Ping.prototype.Error = 0;

        /**
         * R2C_Ping Message.
         * @member {string} Message
         * @memberof NiceET.R2C_Ping
         * @instance
         */
        R2C_Ping.prototype.Message = "";

        /**
         * Creates a new R2C_Ping instance using the specified properties.
         * @function create
         * @memberof NiceET.R2C_Ping
         * @static
         * @param {NiceET.IR2C_Ping=} [properties] Properties to set
         * @returns {NiceET.R2C_Ping} R2C_Ping instance
         */
        R2C_Ping.create = function create(properties) {
            return new R2C_Ping(properties);
        };

        /**
         * Encodes the specified R2C_Ping message. Does not implicitly {@link NiceET.R2C_Ping.verify|verify} messages.
         * @function encode
         * @memberof NiceET.R2C_Ping
         * @static
         * @param {NiceET.IR2C_Ping} message R2C_Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        R2C_Ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified R2C_Ping message, length delimited. Does not implicitly {@link NiceET.R2C_Ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.R2C_Ping
         * @static
         * @param {NiceET.IR2C_Ping} message R2C_Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        R2C_Ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a R2C_Ping message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.R2C_Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.R2C_Ping} R2C_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        R2C_Ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.R2C_Ping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 91:
                    message.Error = reader.int32();
                    break;
                case 92:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a R2C_Ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.R2C_Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.R2C_Ping} R2C_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        R2C_Ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a R2C_Ping message.
         * @function verify
         * @memberof NiceET.R2C_Ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        R2C_Ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates a R2C_Ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.R2C_Ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.R2C_Ping} R2C_Ping
         */
        R2C_Ping.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.R2C_Ping)
                return object;
            var message = new $root.NiceET.R2C_Ping();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a R2C_Ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.R2C_Ping
         * @static
         * @param {NiceET.R2C_Ping} message R2C_Ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        R2C_Ping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RpcId = 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this R2C_Ping to JSON.
         * @function toJSON
         * @memberof NiceET.R2C_Ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        R2C_Ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return R2C_Ping;
    })();

    NiceET.G2C_Test = (function() {

        /**
         * Properties of a G2C_Test.
         * @memberof NiceET
         * @interface IG2C_Test
         */

        /**
         * Constructs a new G2C_Test.
         * @memberof NiceET
         * @classdesc Represents a G2C_Test.
         * @implements IG2C_Test
         * @constructor
         * @param {NiceET.IG2C_Test=} [properties] Properties to set
         */
        function G2C_Test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new G2C_Test instance using the specified properties.
         * @function create
         * @memberof NiceET.G2C_Test
         * @static
         * @param {NiceET.IG2C_Test=} [properties] Properties to set
         * @returns {NiceET.G2C_Test} G2C_Test instance
         */
        G2C_Test.create = function create(properties) {
            return new G2C_Test(properties);
        };

        /**
         * Encodes the specified G2C_Test message. Does not implicitly {@link NiceET.G2C_Test.verify|verify} messages.
         * @function encode
         * @memberof NiceET.G2C_Test
         * @static
         * @param {NiceET.IG2C_Test} message G2C_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified G2C_Test message, length delimited. Does not implicitly {@link NiceET.G2C_Test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.G2C_Test
         * @static
         * @param {NiceET.IG2C_Test} message G2C_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_Test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G2C_Test message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.G2C_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.G2C_Test} G2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_Test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.G2C_Test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a G2C_Test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.G2C_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.G2C_Test} G2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_Test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a G2C_Test message.
         * @function verify
         * @memberof NiceET.G2C_Test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G2C_Test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a G2C_Test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.G2C_Test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.G2C_Test} G2C_Test
         */
        G2C_Test.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.G2C_Test)
                return object;
            return new $root.NiceET.G2C_Test();
        };

        /**
         * Creates a plain object from a G2C_Test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.G2C_Test
         * @static
         * @param {NiceET.G2C_Test} message G2C_Test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        G2C_Test.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this G2C_Test to JSON.
         * @function toJSON
         * @memberof NiceET.G2C_Test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G2C_Test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G2C_Test;
    })();

    NiceET.C2M_Reload = (function() {

        /**
         * Properties of a C2M_Reload.
         * @memberof NiceET
         * @interface IC2M_Reload
         * @property {number|null} [RpcId] C2M_Reload RpcId
         * @property {string|null} [Account] C2M_Reload Account
         * @property {string|null} [Password] C2M_Reload Password
         */

        /**
         * Constructs a new C2M_Reload.
         * @memberof NiceET
         * @classdesc Represents a C2M_Reload.
         * @implements IC2M_Reload
         * @constructor
         * @param {NiceET.IC2M_Reload=} [properties] Properties to set
         */
        function C2M_Reload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2M_Reload RpcId.
         * @member {number} RpcId
         * @memberof NiceET.C2M_Reload
         * @instance
         */
        C2M_Reload.prototype.RpcId = 0;

        /**
         * C2M_Reload Account.
         * @member {string} Account
         * @memberof NiceET.C2M_Reload
         * @instance
         */
        C2M_Reload.prototype.Account = "";

        /**
         * C2M_Reload Password.
         * @member {string} Password
         * @memberof NiceET.C2M_Reload
         * @instance
         */
        C2M_Reload.prototype.Password = "";

        /**
         * Creates a new C2M_Reload instance using the specified properties.
         * @function create
         * @memberof NiceET.C2M_Reload
         * @static
         * @param {NiceET.IC2M_Reload=} [properties] Properties to set
         * @returns {NiceET.C2M_Reload} C2M_Reload instance
         */
        C2M_Reload.create = function create(properties) {
            return new C2M_Reload(properties);
        };

        /**
         * Encodes the specified C2M_Reload message. Does not implicitly {@link NiceET.C2M_Reload.verify|verify} messages.
         * @function encode
         * @memberof NiceET.C2M_Reload
         * @static
         * @param {NiceET.IC2M_Reload} message C2M_Reload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2M_Reload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Account != null && message.hasOwnProperty("Account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Account);
            if (message.Password != null && message.hasOwnProperty("Password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Password);
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            return writer;
        };

        /**
         * Encodes the specified C2M_Reload message, length delimited. Does not implicitly {@link NiceET.C2M_Reload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.C2M_Reload
         * @static
         * @param {NiceET.IC2M_Reload} message C2M_Reload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2M_Reload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2M_Reload message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.C2M_Reload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.C2M_Reload} C2M_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2M_Reload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.C2M_Reload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 1:
                    message.Account = reader.string();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2M_Reload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.C2M_Reload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.C2M_Reload} C2M_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2M_Reload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2M_Reload message.
         * @function verify
         * @memberof NiceET.C2M_Reload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2M_Reload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            return null;
        };

        /**
         * Creates a C2M_Reload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.C2M_Reload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.C2M_Reload} C2M_Reload
         */
        C2M_Reload.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.C2M_Reload)
                return object;
            var message = new $root.NiceET.C2M_Reload();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a C2M_Reload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.C2M_Reload
         * @static
         * @param {NiceET.C2M_Reload} message C2M_Reload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2M_Reload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Account = "";
                object.Password = "";
                object.RpcId = 0;
            }
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            return object;
        };

        /**
         * Converts this C2M_Reload to JSON.
         * @function toJSON
         * @memberof NiceET.C2M_Reload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2M_Reload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2M_Reload;
    })();

    NiceET.M2C_Reload = (function() {

        /**
         * Properties of a M2C_Reload.
         * @memberof NiceET
         * @interface IM2C_Reload
         * @property {number|null} [RpcId] M2C_Reload RpcId
         * @property {number|null} [Error] M2C_Reload Error
         * @property {string|null} [Message] M2C_Reload Message
         */

        /**
         * Constructs a new M2C_Reload.
         * @memberof NiceET
         * @classdesc Represents a M2C_Reload.
         * @implements IM2C_Reload
         * @constructor
         * @param {NiceET.IM2C_Reload=} [properties] Properties to set
         */
        function M2C_Reload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * M2C_Reload RpcId.
         * @member {number} RpcId
         * @memberof NiceET.M2C_Reload
         * @instance
         */
        M2C_Reload.prototype.RpcId = 0;

        /**
         * M2C_Reload Error.
         * @member {number} Error
         * @memberof NiceET.M2C_Reload
         * @instance
         */
        M2C_Reload.prototype.Error = 0;

        /**
         * M2C_Reload Message.
         * @member {string} Message
         * @memberof NiceET.M2C_Reload
         * @instance
         */
        M2C_Reload.prototype.Message = "";

        /**
         * Creates a new M2C_Reload instance using the specified properties.
         * @function create
         * @memberof NiceET.M2C_Reload
         * @static
         * @param {NiceET.IM2C_Reload=} [properties] Properties to set
         * @returns {NiceET.M2C_Reload} M2C_Reload instance
         */
        M2C_Reload.create = function create(properties) {
            return new M2C_Reload(properties);
        };

        /**
         * Encodes the specified M2C_Reload message. Does not implicitly {@link NiceET.M2C_Reload.verify|verify} messages.
         * @function encode
         * @memberof NiceET.M2C_Reload
         * @static
         * @param {NiceET.IM2C_Reload} message M2C_Reload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_Reload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified M2C_Reload message, length delimited. Does not implicitly {@link NiceET.M2C_Reload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.M2C_Reload
         * @static
         * @param {NiceET.IM2C_Reload} message M2C_Reload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_Reload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a M2C_Reload message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.M2C_Reload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.M2C_Reload} M2C_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_Reload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.M2C_Reload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 91:
                    message.Error = reader.int32();
                    break;
                case 92:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a M2C_Reload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.M2C_Reload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.M2C_Reload} M2C_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_Reload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a M2C_Reload message.
         * @function verify
         * @memberof NiceET.M2C_Reload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        M2C_Reload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates a M2C_Reload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.M2C_Reload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.M2C_Reload} M2C_Reload
         */
        M2C_Reload.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.M2C_Reload)
                return object;
            var message = new $root.NiceET.M2C_Reload();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a M2C_Reload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.M2C_Reload
         * @static
         * @param {NiceET.M2C_Reload} message M2C_Reload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        M2C_Reload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RpcId = 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this M2C_Reload to JSON.
         * @function toJSON
         * @memberof NiceET.M2C_Reload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        M2C_Reload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return M2C_Reload;
    })();

    NiceET.C2R_Login = (function() {

        /**
         * Properties of a C2R_Login.
         * @memberof NiceET
         * @interface IC2R_Login
         * @property {number|null} [RpcId] C2R_Login RpcId
         * @property {string|null} [Account] C2R_Login Account
         * @property {string|null} [Password] C2R_Login Password
         */

        /**
         * Constructs a new C2R_Login.
         * @memberof NiceET
         * @classdesc Represents a C2R_Login.
         * @implements IC2R_Login
         * @constructor
         * @param {NiceET.IC2R_Login=} [properties] Properties to set
         */
        function C2R_Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2R_Login RpcId.
         * @member {number} RpcId
         * @memberof NiceET.C2R_Login
         * @instance
         */
        C2R_Login.prototype.RpcId = 0;

        /**
         * C2R_Login Account.
         * @member {string} Account
         * @memberof NiceET.C2R_Login
         * @instance
         */
        C2R_Login.prototype.Account = "";

        /**
         * C2R_Login Password.
         * @member {string} Password
         * @memberof NiceET.C2R_Login
         * @instance
         */
        C2R_Login.prototype.Password = "";

        /**
         * Creates a new C2R_Login instance using the specified properties.
         * @function create
         * @memberof NiceET.C2R_Login
         * @static
         * @param {NiceET.IC2R_Login=} [properties] Properties to set
         * @returns {NiceET.C2R_Login} C2R_Login instance
         */
        C2R_Login.create = function create(properties) {
            return new C2R_Login(properties);
        };

        /**
         * Encodes the specified C2R_Login message. Does not implicitly {@link NiceET.C2R_Login.verify|verify} messages.
         * @function encode
         * @memberof NiceET.C2R_Login
         * @static
         * @param {NiceET.IC2R_Login} message C2R_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2R_Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Account != null && message.hasOwnProperty("Account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Account);
            if (message.Password != null && message.hasOwnProperty("Password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Password);
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            return writer;
        };

        /**
         * Encodes the specified C2R_Login message, length delimited. Does not implicitly {@link NiceET.C2R_Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.C2R_Login
         * @static
         * @param {NiceET.IC2R_Login} message C2R_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2R_Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2R_Login message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.C2R_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.C2R_Login} C2R_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2R_Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.C2R_Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 1:
                    message.Account = reader.string();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2R_Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.C2R_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.C2R_Login} C2R_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2R_Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2R_Login message.
         * @function verify
         * @memberof NiceET.C2R_Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2R_Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            return null;
        };

        /**
         * Creates a C2R_Login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.C2R_Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.C2R_Login} C2R_Login
         */
        C2R_Login.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.C2R_Login)
                return object;
            var message = new $root.NiceET.C2R_Login();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a C2R_Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.C2R_Login
         * @static
         * @param {NiceET.C2R_Login} message C2R_Login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2R_Login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Account = "";
                object.Password = "";
                object.RpcId = 0;
            }
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            return object;
        };

        /**
         * Converts this C2R_Login to JSON.
         * @function toJSON
         * @memberof NiceET.C2R_Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2R_Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2R_Login;
    })();

    NiceET.R2C_Login = (function() {

        /**
         * Properties of a R2C_Login.
         * @memberof NiceET
         * @interface IR2C_Login
         * @property {number|null} [RpcId] R2C_Login RpcId
         * @property {number|null} [Error] R2C_Login Error
         * @property {string|null} [Message] R2C_Login Message
         * @property {string|null} [Address] R2C_Login Address
         * @property {number|Long|null} [Key] R2C_Login Key
         * @property {number|Long|null} [GateId] R2C_Login GateId
         */

        /**
         * Constructs a new R2C_Login.
         * @memberof NiceET
         * @classdesc Represents a R2C_Login.
         * @implements IR2C_Login
         * @constructor
         * @param {NiceET.IR2C_Login=} [properties] Properties to set
         */
        function R2C_Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * R2C_Login RpcId.
         * @member {number} RpcId
         * @memberof NiceET.R2C_Login
         * @instance
         */
        R2C_Login.prototype.RpcId = 0;

        /**
         * R2C_Login Error.
         * @member {number} Error
         * @memberof NiceET.R2C_Login
         * @instance
         */
        R2C_Login.prototype.Error = 0;

        /**
         * R2C_Login Message.
         * @member {string} Message
         * @memberof NiceET.R2C_Login
         * @instance
         */
        R2C_Login.prototype.Message = "";

        /**
         * R2C_Login Address.
         * @member {string} Address
         * @memberof NiceET.R2C_Login
         * @instance
         */
        R2C_Login.prototype.Address = "";

        /**
         * R2C_Login Key.
         * @member {number|Long} Key
         * @memberof NiceET.R2C_Login
         * @instance
         */
        R2C_Login.prototype.Key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * R2C_Login GateId.
         * @member {number|Long} GateId
         * @memberof NiceET.R2C_Login
         * @instance
         */
        R2C_Login.prototype.GateId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new R2C_Login instance using the specified properties.
         * @function create
         * @memberof NiceET.R2C_Login
         * @static
         * @param {NiceET.IR2C_Login=} [properties] Properties to set
         * @returns {NiceET.R2C_Login} R2C_Login instance
         */
        R2C_Login.create = function create(properties) {
            return new R2C_Login(properties);
        };

        /**
         * Encodes the specified R2C_Login message. Does not implicitly {@link NiceET.R2C_Login.verify|verify} messages.
         * @function encode
         * @memberof NiceET.R2C_Login
         * @static
         * @param {NiceET.IR2C_Login} message R2C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        R2C_Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Address != null && message.hasOwnProperty("Address"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Address);
            if (message.Key != null && message.hasOwnProperty("Key"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.Key);
            if (message.GateId != null && message.hasOwnProperty("GateId"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint64(message.GateId);
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified R2C_Login message, length delimited. Does not implicitly {@link NiceET.R2C_Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.R2C_Login
         * @static
         * @param {NiceET.IR2C_Login} message R2C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        R2C_Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a R2C_Login message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.R2C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.R2C_Login} R2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        R2C_Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.R2C_Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 91:
                    message.Error = reader.int32();
                    break;
                case 92:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.Address = reader.string();
                    break;
                case 2:
                    message.Key = reader.sint64();
                    break;
                case 3:
                    message.GateId = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a R2C_Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.R2C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.R2C_Login} R2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        R2C_Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a R2C_Login message.
         * @function verify
         * @memberof NiceET.R2C_Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        R2C_Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.Address != null && message.hasOwnProperty("Address"))
                if (!$util.isString(message.Address))
                    return "Address: string expected";
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (!$util.isInteger(message.Key) && !(message.Key && $util.isInteger(message.Key.low) && $util.isInteger(message.Key.high)))
                    return "Key: integer|Long expected";
            if (message.GateId != null && message.hasOwnProperty("GateId"))
                if (!$util.isInteger(message.GateId) && !(message.GateId && $util.isInteger(message.GateId.low) && $util.isInteger(message.GateId.high)))
                    return "GateId: integer|Long expected";
            return null;
        };

        /**
         * Creates a R2C_Login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.R2C_Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.R2C_Login} R2C_Login
         */
        R2C_Login.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.R2C_Login)
                return object;
            var message = new $root.NiceET.R2C_Login();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.Address != null)
                message.Address = String(object.Address);
            if (object.Key != null)
                if ($util.Long)
                    (message.Key = $util.Long.fromValue(object.Key)).unsigned = false;
                else if (typeof object.Key === "string")
                    message.Key = parseInt(object.Key, 10);
                else if (typeof object.Key === "number")
                    message.Key = object.Key;
                else if (typeof object.Key === "object")
                    message.Key = new $util.LongBits(object.Key.low >>> 0, object.Key.high >>> 0).toNumber();
            if (object.GateId != null)
                if ($util.Long)
                    (message.GateId = $util.Long.fromValue(object.GateId)).unsigned = false;
                else if (typeof object.GateId === "string")
                    message.GateId = parseInt(object.GateId, 10);
                else if (typeof object.GateId === "number")
                    message.GateId = object.GateId;
                else if (typeof object.GateId === "object")
                    message.GateId = new $util.LongBits(object.GateId.low >>> 0, object.GateId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a R2C_Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.R2C_Login
         * @static
         * @param {NiceET.R2C_Login} message R2C_Login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        R2C_Login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Address = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Key = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Key = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.GateId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GateId = options.longs === String ? "0" : 0;
                object.RpcId = 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.Address != null && message.hasOwnProperty("Address"))
                object.Address = message.Address;
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (typeof message.Key === "number")
                    object.Key = options.longs === String ? String(message.Key) : message.Key;
                else
                    object.Key = options.longs === String ? $util.Long.prototype.toString.call(message.Key) : options.longs === Number ? new $util.LongBits(message.Key.low >>> 0, message.Key.high >>> 0).toNumber() : message.Key;
            if (message.GateId != null && message.hasOwnProperty("GateId"))
                if (typeof message.GateId === "number")
                    object.GateId = options.longs === String ? String(message.GateId) : message.GateId;
                else
                    object.GateId = options.longs === String ? $util.Long.prototype.toString.call(message.GateId) : options.longs === Number ? new $util.LongBits(message.GateId.low >>> 0, message.GateId.high >>> 0).toNumber() : message.GateId;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this R2C_Login to JSON.
         * @function toJSON
         * @memberof NiceET.R2C_Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        R2C_Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return R2C_Login;
    })();

    NiceET.C2G_LoginGate = (function() {

        /**
         * Properties of a C2G_LoginGate.
         * @memberof NiceET
         * @interface IC2G_LoginGate
         * @property {number|null} [RpcId] C2G_LoginGate RpcId
         * @property {number|Long|null} [Key] C2G_LoginGate Key
         * @property {number|Long|null} [GateId] C2G_LoginGate GateId
         */

        /**
         * Constructs a new C2G_LoginGate.
         * @memberof NiceET
         * @classdesc Represents a C2G_LoginGate.
         * @implements IC2G_LoginGate
         * @constructor
         * @param {NiceET.IC2G_LoginGate=} [properties] Properties to set
         */
        function C2G_LoginGate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2G_LoginGate RpcId.
         * @member {number} RpcId
         * @memberof NiceET.C2G_LoginGate
         * @instance
         */
        C2G_LoginGate.prototype.RpcId = 0;

        /**
         * C2G_LoginGate Key.
         * @member {number|Long} Key
         * @memberof NiceET.C2G_LoginGate
         * @instance
         */
        C2G_LoginGate.prototype.Key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2G_LoginGate GateId.
         * @member {number|Long} GateId
         * @memberof NiceET.C2G_LoginGate
         * @instance
         */
        C2G_LoginGate.prototype.GateId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2G_LoginGate instance using the specified properties.
         * @function create
         * @memberof NiceET.C2G_LoginGate
         * @static
         * @param {NiceET.IC2G_LoginGate=} [properties] Properties to set
         * @returns {NiceET.C2G_LoginGate} C2G_LoginGate instance
         */
        C2G_LoginGate.create = function create(properties) {
            return new C2G_LoginGate(properties);
        };

        /**
         * Encodes the specified C2G_LoginGate message. Does not implicitly {@link NiceET.C2G_LoginGate.verify|verify} messages.
         * @function encode
         * @memberof NiceET.C2G_LoginGate
         * @static
         * @param {NiceET.IC2G_LoginGate} message C2G_LoginGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_LoginGate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Key != null && message.hasOwnProperty("Key"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.Key);
            if (message.GateId != null && message.hasOwnProperty("GateId"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.GateId);
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            return writer;
        };

        /**
         * Encodes the specified C2G_LoginGate message, length delimited. Does not implicitly {@link NiceET.C2G_LoginGate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.C2G_LoginGate
         * @static
         * @param {NiceET.IC2G_LoginGate} message C2G_LoginGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_LoginGate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2G_LoginGate message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.C2G_LoginGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.C2G_LoginGate} C2G_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_LoginGate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.C2G_LoginGate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 1:
                    message.Key = reader.sint64();
                    break;
                case 2:
                    message.GateId = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2G_LoginGate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.C2G_LoginGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.C2G_LoginGate} C2G_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_LoginGate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2G_LoginGate message.
         * @function verify
         * @memberof NiceET.C2G_LoginGate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2G_LoginGate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (!$util.isInteger(message.Key) && !(message.Key && $util.isInteger(message.Key.low) && $util.isInteger(message.Key.high)))
                    return "Key: integer|Long expected";
            if (message.GateId != null && message.hasOwnProperty("GateId"))
                if (!$util.isInteger(message.GateId) && !(message.GateId && $util.isInteger(message.GateId.low) && $util.isInteger(message.GateId.high)))
                    return "GateId: integer|Long expected";
            return null;
        };

        /**
         * Creates a C2G_LoginGate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.C2G_LoginGate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.C2G_LoginGate} C2G_LoginGate
         */
        C2G_LoginGate.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.C2G_LoginGate)
                return object;
            var message = new $root.NiceET.C2G_LoginGate();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Key != null)
                if ($util.Long)
                    (message.Key = $util.Long.fromValue(object.Key)).unsigned = false;
                else if (typeof object.Key === "string")
                    message.Key = parseInt(object.Key, 10);
                else if (typeof object.Key === "number")
                    message.Key = object.Key;
                else if (typeof object.Key === "object")
                    message.Key = new $util.LongBits(object.Key.low >>> 0, object.Key.high >>> 0).toNumber();
            if (object.GateId != null)
                if ($util.Long)
                    (message.GateId = $util.Long.fromValue(object.GateId)).unsigned = false;
                else if (typeof object.GateId === "string")
                    message.GateId = parseInt(object.GateId, 10);
                else if (typeof object.GateId === "number")
                    message.GateId = object.GateId;
                else if (typeof object.GateId === "object")
                    message.GateId = new $util.LongBits(object.GateId.low >>> 0, object.GateId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a C2G_LoginGate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.C2G_LoginGate
         * @static
         * @param {NiceET.C2G_LoginGate} message C2G_LoginGate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2G_LoginGate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Key = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Key = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.GateId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GateId = options.longs === String ? "0" : 0;
                object.RpcId = 0;
            }
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (typeof message.Key === "number")
                    object.Key = options.longs === String ? String(message.Key) : message.Key;
                else
                    object.Key = options.longs === String ? $util.Long.prototype.toString.call(message.Key) : options.longs === Number ? new $util.LongBits(message.Key.low >>> 0, message.Key.high >>> 0).toNumber() : message.Key;
            if (message.GateId != null && message.hasOwnProperty("GateId"))
                if (typeof message.GateId === "number")
                    object.GateId = options.longs === String ? String(message.GateId) : message.GateId;
                else
                    object.GateId = options.longs === String ? $util.Long.prototype.toString.call(message.GateId) : options.longs === Number ? new $util.LongBits(message.GateId.low >>> 0, message.GateId.high >>> 0).toNumber() : message.GateId;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            return object;
        };

        /**
         * Converts this C2G_LoginGate to JSON.
         * @function toJSON
         * @memberof NiceET.C2G_LoginGate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2G_LoginGate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2G_LoginGate;
    })();

    NiceET.G2C_LoginGate = (function() {

        /**
         * Properties of a G2C_LoginGate.
         * @memberof NiceET
         * @interface IG2C_LoginGate
         * @property {number|null} [RpcId] G2C_LoginGate RpcId
         * @property {number|null} [Error] G2C_LoginGate Error
         * @property {string|null} [Message] G2C_LoginGate Message
         * @property {number|Long|null} [PlayerId] G2C_LoginGate PlayerId
         */

        /**
         * Constructs a new G2C_LoginGate.
         * @memberof NiceET
         * @classdesc Represents a G2C_LoginGate.
         * @implements IG2C_LoginGate
         * @constructor
         * @param {NiceET.IG2C_LoginGate=} [properties] Properties to set
         */
        function G2C_LoginGate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * G2C_LoginGate RpcId.
         * @member {number} RpcId
         * @memberof NiceET.G2C_LoginGate
         * @instance
         */
        G2C_LoginGate.prototype.RpcId = 0;

        /**
         * G2C_LoginGate Error.
         * @member {number} Error
         * @memberof NiceET.G2C_LoginGate
         * @instance
         */
        G2C_LoginGate.prototype.Error = 0;

        /**
         * G2C_LoginGate Message.
         * @member {string} Message
         * @memberof NiceET.G2C_LoginGate
         * @instance
         */
        G2C_LoginGate.prototype.Message = "";

        /**
         * G2C_LoginGate PlayerId.
         * @member {number|Long} PlayerId
         * @memberof NiceET.G2C_LoginGate
         * @instance
         */
        G2C_LoginGate.prototype.PlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new G2C_LoginGate instance using the specified properties.
         * @function create
         * @memberof NiceET.G2C_LoginGate
         * @static
         * @param {NiceET.IG2C_LoginGate=} [properties] Properties to set
         * @returns {NiceET.G2C_LoginGate} G2C_LoginGate instance
         */
        G2C_LoginGate.create = function create(properties) {
            return new G2C_LoginGate(properties);
        };

        /**
         * Encodes the specified G2C_LoginGate message. Does not implicitly {@link NiceET.G2C_LoginGate.verify|verify} messages.
         * @function encode
         * @memberof NiceET.G2C_LoginGate
         * @static
         * @param {NiceET.IG2C_LoginGate} message G2C_LoginGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_LoginGate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PlayerId != null && message.hasOwnProperty("PlayerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.PlayerId);
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified G2C_LoginGate message, length delimited. Does not implicitly {@link NiceET.G2C_LoginGate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.G2C_LoginGate
         * @static
         * @param {NiceET.IG2C_LoginGate} message G2C_LoginGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_LoginGate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G2C_LoginGate message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.G2C_LoginGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.G2C_LoginGate} G2C_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_LoginGate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.G2C_LoginGate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 91:
                    message.Error = reader.int32();
                    break;
                case 92:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.PlayerId = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a G2C_LoginGate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.G2C_LoginGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.G2C_LoginGate} G2C_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_LoginGate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a G2C_LoginGate message.
         * @function verify
         * @memberof NiceET.G2C_LoginGate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G2C_LoginGate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.PlayerId != null && message.hasOwnProperty("PlayerId"))
                if (!$util.isInteger(message.PlayerId) && !(message.PlayerId && $util.isInteger(message.PlayerId.low) && $util.isInteger(message.PlayerId.high)))
                    return "PlayerId: integer|Long expected";
            return null;
        };

        /**
         * Creates a G2C_LoginGate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.G2C_LoginGate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.G2C_LoginGate} G2C_LoginGate
         */
        G2C_LoginGate.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.G2C_LoginGate)
                return object;
            var message = new $root.NiceET.G2C_LoginGate();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.PlayerId != null)
                if ($util.Long)
                    (message.PlayerId = $util.Long.fromValue(object.PlayerId)).unsigned = false;
                else if (typeof object.PlayerId === "string")
                    message.PlayerId = parseInt(object.PlayerId, 10);
                else if (typeof object.PlayerId === "number")
                    message.PlayerId = object.PlayerId;
                else if (typeof object.PlayerId === "object")
                    message.PlayerId = new $util.LongBits(object.PlayerId.low >>> 0, object.PlayerId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a G2C_LoginGate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.G2C_LoginGate
         * @static
         * @param {NiceET.G2C_LoginGate} message G2C_LoginGate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        G2C_LoginGate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlayerId = options.longs === String ? "0" : 0;
                object.RpcId = 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.PlayerId != null && message.hasOwnProperty("PlayerId"))
                if (typeof message.PlayerId === "number")
                    object.PlayerId = options.longs === String ? String(message.PlayerId) : message.PlayerId;
                else
                    object.PlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.PlayerId) : options.longs === Number ? new $util.LongBits(message.PlayerId.low >>> 0, message.PlayerId.high >>> 0).toNumber() : message.PlayerId;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this G2C_LoginGate to JSON.
         * @function toJSON
         * @memberof NiceET.G2C_LoginGate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G2C_LoginGate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G2C_LoginGate;
    })();

    NiceET.G2C_TestHotfixMessage = (function() {

        /**
         * Properties of a G2C_TestHotfixMessage.
         * @memberof NiceET
         * @interface IG2C_TestHotfixMessage
         * @property {string|null} [Info] G2C_TestHotfixMessage Info
         */

        /**
         * Constructs a new G2C_TestHotfixMessage.
         * @memberof NiceET
         * @classdesc Represents a G2C_TestHotfixMessage.
         * @implements IG2C_TestHotfixMessage
         * @constructor
         * @param {NiceET.IG2C_TestHotfixMessage=} [properties] Properties to set
         */
        function G2C_TestHotfixMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * G2C_TestHotfixMessage Info.
         * @member {string} Info
         * @memberof NiceET.G2C_TestHotfixMessage
         * @instance
         */
        G2C_TestHotfixMessage.prototype.Info = "";

        /**
         * Creates a new G2C_TestHotfixMessage instance using the specified properties.
         * @function create
         * @memberof NiceET.G2C_TestHotfixMessage
         * @static
         * @param {NiceET.IG2C_TestHotfixMessage=} [properties] Properties to set
         * @returns {NiceET.G2C_TestHotfixMessage} G2C_TestHotfixMessage instance
         */
        G2C_TestHotfixMessage.create = function create(properties) {
            return new G2C_TestHotfixMessage(properties);
        };

        /**
         * Encodes the specified G2C_TestHotfixMessage message. Does not implicitly {@link NiceET.G2C_TestHotfixMessage.verify|verify} messages.
         * @function encode
         * @memberof NiceET.G2C_TestHotfixMessage
         * @static
         * @param {NiceET.IG2C_TestHotfixMessage} message G2C_TestHotfixMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_TestHotfixMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Info != null && message.hasOwnProperty("Info"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Info);
            return writer;
        };

        /**
         * Encodes the specified G2C_TestHotfixMessage message, length delimited. Does not implicitly {@link NiceET.G2C_TestHotfixMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.G2C_TestHotfixMessage
         * @static
         * @param {NiceET.IG2C_TestHotfixMessage} message G2C_TestHotfixMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_TestHotfixMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G2C_TestHotfixMessage message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.G2C_TestHotfixMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.G2C_TestHotfixMessage} G2C_TestHotfixMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_TestHotfixMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.G2C_TestHotfixMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Info = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a G2C_TestHotfixMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.G2C_TestHotfixMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.G2C_TestHotfixMessage} G2C_TestHotfixMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_TestHotfixMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a G2C_TestHotfixMessage message.
         * @function verify
         * @memberof NiceET.G2C_TestHotfixMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G2C_TestHotfixMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Info != null && message.hasOwnProperty("Info"))
                if (!$util.isString(message.Info))
                    return "Info: string expected";
            return null;
        };

        /**
         * Creates a G2C_TestHotfixMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.G2C_TestHotfixMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.G2C_TestHotfixMessage} G2C_TestHotfixMessage
         */
        G2C_TestHotfixMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.G2C_TestHotfixMessage)
                return object;
            var message = new $root.NiceET.G2C_TestHotfixMessage();
            if (object.Info != null)
                message.Info = String(object.Info);
            return message;
        };

        /**
         * Creates a plain object from a G2C_TestHotfixMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.G2C_TestHotfixMessage
         * @static
         * @param {NiceET.G2C_TestHotfixMessage} message G2C_TestHotfixMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        G2C_TestHotfixMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Info = "";
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = message.Info;
            return object;
        };

        /**
         * Converts this G2C_TestHotfixMessage to JSON.
         * @function toJSON
         * @memberof NiceET.G2C_TestHotfixMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G2C_TestHotfixMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G2C_TestHotfixMessage;
    })();

    NiceET.C2M_TestActorRequest = (function() {

        /**
         * Properties of a C2M_TestActorRequest.
         * @memberof NiceET
         * @interface IC2M_TestActorRequest
         * @property {number|null} [RpcId] C2M_TestActorRequest RpcId
         * @property {number|Long|null} [ActorId] C2M_TestActorRequest ActorId
         * @property {string|null} [Info] C2M_TestActorRequest Info
         */

        /**
         * Constructs a new C2M_TestActorRequest.
         * @memberof NiceET
         * @classdesc Represents a C2M_TestActorRequest.
         * @implements IC2M_TestActorRequest
         * @constructor
         * @param {NiceET.IC2M_TestActorRequest=} [properties] Properties to set
         */
        function C2M_TestActorRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2M_TestActorRequest RpcId.
         * @member {number} RpcId
         * @memberof NiceET.C2M_TestActorRequest
         * @instance
         */
        C2M_TestActorRequest.prototype.RpcId = 0;

        /**
         * C2M_TestActorRequest ActorId.
         * @member {number|Long} ActorId
         * @memberof NiceET.C2M_TestActorRequest
         * @instance
         */
        C2M_TestActorRequest.prototype.ActorId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2M_TestActorRequest Info.
         * @member {string} Info
         * @memberof NiceET.C2M_TestActorRequest
         * @instance
         */
        C2M_TestActorRequest.prototype.Info = "";

        /**
         * Creates a new C2M_TestActorRequest instance using the specified properties.
         * @function create
         * @memberof NiceET.C2M_TestActorRequest
         * @static
         * @param {NiceET.IC2M_TestActorRequest=} [properties] Properties to set
         * @returns {NiceET.C2M_TestActorRequest} C2M_TestActorRequest instance
         */
        C2M_TestActorRequest.create = function create(properties) {
            return new C2M_TestActorRequest(properties);
        };

        /**
         * Encodes the specified C2M_TestActorRequest message. Does not implicitly {@link NiceET.C2M_TestActorRequest.verify|verify} messages.
         * @function encode
         * @memberof NiceET.C2M_TestActorRequest
         * @static
         * @param {NiceET.IC2M_TestActorRequest} message C2M_TestActorRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2M_TestActorRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Info != null && message.hasOwnProperty("Info"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Info);
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                writer.uint32(/* id 91, wireType 0 =*/728).sint64(message.ActorId);
            return writer;
        };

        /**
         * Encodes the specified C2M_TestActorRequest message, length delimited. Does not implicitly {@link NiceET.C2M_TestActorRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.C2M_TestActorRequest
         * @static
         * @param {NiceET.IC2M_TestActorRequest} message C2M_TestActorRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2M_TestActorRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2M_TestActorRequest message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.C2M_TestActorRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.C2M_TestActorRequest} C2M_TestActorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2M_TestActorRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.C2M_TestActorRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 91:
                    message.ActorId = reader.sint64();
                    break;
                case 1:
                    message.Info = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2M_TestActorRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.C2M_TestActorRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.C2M_TestActorRequest} C2M_TestActorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2M_TestActorRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2M_TestActorRequest message.
         * @function verify
         * @memberof NiceET.C2M_TestActorRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2M_TestActorRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (!$util.isInteger(message.ActorId) && !(message.ActorId && $util.isInteger(message.ActorId.low) && $util.isInteger(message.ActorId.high)))
                    return "ActorId: integer|Long expected";
            if (message.Info != null && message.hasOwnProperty("Info"))
                if (!$util.isString(message.Info))
                    return "Info: string expected";
            return null;
        };

        /**
         * Creates a C2M_TestActorRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.C2M_TestActorRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.C2M_TestActorRequest} C2M_TestActorRequest
         */
        C2M_TestActorRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.C2M_TestActorRequest)
                return object;
            var message = new $root.NiceET.C2M_TestActorRequest();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.ActorId != null)
                if ($util.Long)
                    (message.ActorId = $util.Long.fromValue(object.ActorId)).unsigned = false;
                else if (typeof object.ActorId === "string")
                    message.ActorId = parseInt(object.ActorId, 10);
                else if (typeof object.ActorId === "number")
                    message.ActorId = object.ActorId;
                else if (typeof object.ActorId === "object")
                    message.ActorId = new $util.LongBits(object.ActorId.low >>> 0, object.ActorId.high >>> 0).toNumber();
            if (object.Info != null)
                message.Info = String(object.Info);
            return message;
        };

        /**
         * Creates a plain object from a C2M_TestActorRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.C2M_TestActorRequest
         * @static
         * @param {NiceET.C2M_TestActorRequest} message C2M_TestActorRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2M_TestActorRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Info = "";
                object.RpcId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ActorId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ActorId = options.longs === String ? "0" : 0;
            }
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = message.Info;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.ActorId != null && message.hasOwnProperty("ActorId"))
                if (typeof message.ActorId === "number")
                    object.ActorId = options.longs === String ? String(message.ActorId) : message.ActorId;
                else
                    object.ActorId = options.longs === String ? $util.Long.prototype.toString.call(message.ActorId) : options.longs === Number ? new $util.LongBits(message.ActorId.low >>> 0, message.ActorId.high >>> 0).toNumber() : message.ActorId;
            return object;
        };

        /**
         * Converts this C2M_TestActorRequest to JSON.
         * @function toJSON
         * @memberof NiceET.C2M_TestActorRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2M_TestActorRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2M_TestActorRequest;
    })();

    NiceET.M2C_TestActorResponse = (function() {

        /**
         * Properties of a M2C_TestActorResponse.
         * @memberof NiceET
         * @interface IM2C_TestActorResponse
         * @property {number|null} [RpcId] M2C_TestActorResponse RpcId
         * @property {number|null} [Error] M2C_TestActorResponse Error
         * @property {string|null} [Message] M2C_TestActorResponse Message
         * @property {string|null} [Info] M2C_TestActorResponse Info
         */

        /**
         * Constructs a new M2C_TestActorResponse.
         * @memberof NiceET
         * @classdesc Represents a M2C_TestActorResponse.
         * @implements IM2C_TestActorResponse
         * @constructor
         * @param {NiceET.IM2C_TestActorResponse=} [properties] Properties to set
         */
        function M2C_TestActorResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * M2C_TestActorResponse RpcId.
         * @member {number} RpcId
         * @memberof NiceET.M2C_TestActorResponse
         * @instance
         */
        M2C_TestActorResponse.prototype.RpcId = 0;

        /**
         * M2C_TestActorResponse Error.
         * @member {number} Error
         * @memberof NiceET.M2C_TestActorResponse
         * @instance
         */
        M2C_TestActorResponse.prototype.Error = 0;

        /**
         * M2C_TestActorResponse Message.
         * @member {string} Message
         * @memberof NiceET.M2C_TestActorResponse
         * @instance
         */
        M2C_TestActorResponse.prototype.Message = "";

        /**
         * M2C_TestActorResponse Info.
         * @member {string} Info
         * @memberof NiceET.M2C_TestActorResponse
         * @instance
         */
        M2C_TestActorResponse.prototype.Info = "";

        /**
         * Creates a new M2C_TestActorResponse instance using the specified properties.
         * @function create
         * @memberof NiceET.M2C_TestActorResponse
         * @static
         * @param {NiceET.IM2C_TestActorResponse=} [properties] Properties to set
         * @returns {NiceET.M2C_TestActorResponse} M2C_TestActorResponse instance
         */
        M2C_TestActorResponse.create = function create(properties) {
            return new M2C_TestActorResponse(properties);
        };

        /**
         * Encodes the specified M2C_TestActorResponse message. Does not implicitly {@link NiceET.M2C_TestActorResponse.verify|verify} messages.
         * @function encode
         * @memberof NiceET.M2C_TestActorResponse
         * @static
         * @param {NiceET.IM2C_TestActorResponse} message M2C_TestActorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_TestActorResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Info != null && message.hasOwnProperty("Info"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Info);
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified M2C_TestActorResponse message, length delimited. Does not implicitly {@link NiceET.M2C_TestActorResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.M2C_TestActorResponse
         * @static
         * @param {NiceET.IM2C_TestActorResponse} message M2C_TestActorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_TestActorResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a M2C_TestActorResponse message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.M2C_TestActorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.M2C_TestActorResponse} M2C_TestActorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_TestActorResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.M2C_TestActorResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 91:
                    message.Error = reader.int32();
                    break;
                case 92:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.Info = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a M2C_TestActorResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.M2C_TestActorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.M2C_TestActorResponse} M2C_TestActorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_TestActorResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a M2C_TestActorResponse message.
         * @function verify
         * @memberof NiceET.M2C_TestActorResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        M2C_TestActorResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.Info != null && message.hasOwnProperty("Info"))
                if (!$util.isString(message.Info))
                    return "Info: string expected";
            return null;
        };

        /**
         * Creates a M2C_TestActorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.M2C_TestActorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.M2C_TestActorResponse} M2C_TestActorResponse
         */
        M2C_TestActorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.M2C_TestActorResponse)
                return object;
            var message = new $root.NiceET.M2C_TestActorResponse();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.Info != null)
                message.Info = String(object.Info);
            return message;
        };

        /**
         * Creates a plain object from a M2C_TestActorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.M2C_TestActorResponse
         * @static
         * @param {NiceET.M2C_TestActorResponse} message M2C_TestActorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        M2C_TestActorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Info = "";
                object.RpcId = 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = message.Info;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this M2C_TestActorResponse to JSON.
         * @function toJSON
         * @memberof NiceET.M2C_TestActorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        M2C_TestActorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return M2C_TestActorResponse;
    })();

    NiceET.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof NiceET
         * @interface IPlayerInfo
         * @property {number|null} [RpcId] PlayerInfo RpcId
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof NiceET
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {NiceET.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo RpcId.
         * @member {number} RpcId
         * @memberof NiceET.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.RpcId = 0;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof NiceET.PlayerInfo
         * @static
         * @param {NiceET.IPlayerInfo=} [properties] Properties to set
         * @returns {NiceET.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link NiceET.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof NiceET.PlayerInfo
         * @static
         * @param {NiceET.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link NiceET.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.PlayerInfo
         * @static
         * @param {NiceET.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof NiceET.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.PlayerInfo)
                return object;
            var message = new $root.NiceET.PlayerInfo();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.PlayerInfo
         * @static
         * @param {NiceET.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.RpcId = 0;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            return object;
        };

        /**
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof NiceET.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerInfo;
    })();

    NiceET.C2G_PlayerInfo = (function() {

        /**
         * Properties of a C2G_PlayerInfo.
         * @memberof NiceET
         * @interface IC2G_PlayerInfo
         * @property {number|null} [RpcId] C2G_PlayerInfo RpcId
         */

        /**
         * Constructs a new C2G_PlayerInfo.
         * @memberof NiceET
         * @classdesc Represents a C2G_PlayerInfo.
         * @implements IC2G_PlayerInfo
         * @constructor
         * @param {NiceET.IC2G_PlayerInfo=} [properties] Properties to set
         */
        function C2G_PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2G_PlayerInfo RpcId.
         * @member {number} RpcId
         * @memberof NiceET.C2G_PlayerInfo
         * @instance
         */
        C2G_PlayerInfo.prototype.RpcId = 0;

        /**
         * Creates a new C2G_PlayerInfo instance using the specified properties.
         * @function create
         * @memberof NiceET.C2G_PlayerInfo
         * @static
         * @param {NiceET.IC2G_PlayerInfo=} [properties] Properties to set
         * @returns {NiceET.C2G_PlayerInfo} C2G_PlayerInfo instance
         */
        C2G_PlayerInfo.create = function create(properties) {
            return new C2G_PlayerInfo(properties);
        };

        /**
         * Encodes the specified C2G_PlayerInfo message. Does not implicitly {@link NiceET.C2G_PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof NiceET.C2G_PlayerInfo
         * @static
         * @param {NiceET.IC2G_PlayerInfo} message C2G_PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            return writer;
        };

        /**
         * Encodes the specified C2G_PlayerInfo message, length delimited. Does not implicitly {@link NiceET.C2G_PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.C2G_PlayerInfo
         * @static
         * @param {NiceET.IC2G_PlayerInfo} message C2G_PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2G_PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.C2G_PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.C2G_PlayerInfo} C2G_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.C2G_PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2G_PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.C2G_PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.C2G_PlayerInfo} C2G_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2G_PlayerInfo message.
         * @function verify
         * @memberof NiceET.C2G_PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2G_PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            return null;
        };

        /**
         * Creates a C2G_PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.C2G_PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.C2G_PlayerInfo} C2G_PlayerInfo
         */
        C2G_PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.C2G_PlayerInfo)
                return object;
            var message = new $root.NiceET.C2G_PlayerInfo();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            return message;
        };

        /**
         * Creates a plain object from a C2G_PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.C2G_PlayerInfo
         * @static
         * @param {NiceET.C2G_PlayerInfo} message C2G_PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2G_PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.RpcId = 0;
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            return object;
        };

        /**
         * Converts this C2G_PlayerInfo to JSON.
         * @function toJSON
         * @memberof NiceET.C2G_PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2G_PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2G_PlayerInfo;
    })();

    NiceET.G2C_PlayerInfo = (function() {

        /**
         * Properties of a G2C_PlayerInfo.
         * @memberof NiceET
         * @interface IG2C_PlayerInfo
         * @property {number|null} [RpcId] G2C_PlayerInfo RpcId
         * @property {number|null} [Error] G2C_PlayerInfo Error
         * @property {string|null} [Message] G2C_PlayerInfo Message
         * @property {NiceET.IPlayerInfo|null} [PlayerInfo] G2C_PlayerInfo PlayerInfo
         * @property {Array.<NiceET.IPlayerInfo>|null} [PlayerInfos] G2C_PlayerInfo PlayerInfos
         * @property {Array.<string>|null} [TestRepeatedString] G2C_PlayerInfo TestRepeatedString
         * @property {Array.<number>|null} [TestRepeatedInt32] G2C_PlayerInfo TestRepeatedInt32
         * @property {Array.<number|Long>|null} [TestRepeatedInt64] G2C_PlayerInfo TestRepeatedInt64
         */

        /**
         * Constructs a new G2C_PlayerInfo.
         * @memberof NiceET
         * @classdesc Represents a G2C_PlayerInfo.
         * @implements IG2C_PlayerInfo
         * @constructor
         * @param {NiceET.IG2C_PlayerInfo=} [properties] Properties to set
         */
        function G2C_PlayerInfo(properties) {
            this.PlayerInfos = [];
            this.TestRepeatedString = [];
            this.TestRepeatedInt32 = [];
            this.TestRepeatedInt64 = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * G2C_PlayerInfo RpcId.
         * @member {number} RpcId
         * @memberof NiceET.G2C_PlayerInfo
         * @instance
         */
        G2C_PlayerInfo.prototype.RpcId = 0;

        /**
         * G2C_PlayerInfo Error.
         * @member {number} Error
         * @memberof NiceET.G2C_PlayerInfo
         * @instance
         */
        G2C_PlayerInfo.prototype.Error = 0;

        /**
         * G2C_PlayerInfo Message.
         * @member {string} Message
         * @memberof NiceET.G2C_PlayerInfo
         * @instance
         */
        G2C_PlayerInfo.prototype.Message = "";

        /**
         * G2C_PlayerInfo PlayerInfo.
         * @member {NiceET.IPlayerInfo|null|undefined} PlayerInfo
         * @memberof NiceET.G2C_PlayerInfo
         * @instance
         */
        G2C_PlayerInfo.prototype.PlayerInfo = null;

        /**
         * G2C_PlayerInfo PlayerInfos.
         * @member {Array.<NiceET.IPlayerInfo>} PlayerInfos
         * @memberof NiceET.G2C_PlayerInfo
         * @instance
         */
        G2C_PlayerInfo.prototype.PlayerInfos = $util.emptyArray;

        /**
         * G2C_PlayerInfo TestRepeatedString.
         * @member {Array.<string>} TestRepeatedString
         * @memberof NiceET.G2C_PlayerInfo
         * @instance
         */
        G2C_PlayerInfo.prototype.TestRepeatedString = $util.emptyArray;

        /**
         * G2C_PlayerInfo TestRepeatedInt32.
         * @member {Array.<number>} TestRepeatedInt32
         * @memberof NiceET.G2C_PlayerInfo
         * @instance
         */
        G2C_PlayerInfo.prototype.TestRepeatedInt32 = $util.emptyArray;

        /**
         * G2C_PlayerInfo TestRepeatedInt64.
         * @member {Array.<number|Long>} TestRepeatedInt64
         * @memberof NiceET.G2C_PlayerInfo
         * @instance
         */
        G2C_PlayerInfo.prototype.TestRepeatedInt64 = $util.emptyArray;

        /**
         * Creates a new G2C_PlayerInfo instance using the specified properties.
         * @function create
         * @memberof NiceET.G2C_PlayerInfo
         * @static
         * @param {NiceET.IG2C_PlayerInfo=} [properties] Properties to set
         * @returns {NiceET.G2C_PlayerInfo} G2C_PlayerInfo instance
         */
        G2C_PlayerInfo.create = function create(properties) {
            return new G2C_PlayerInfo(properties);
        };

        /**
         * Encodes the specified G2C_PlayerInfo message. Does not implicitly {@link NiceET.G2C_PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof NiceET.G2C_PlayerInfo
         * @static
         * @param {NiceET.IG2C_PlayerInfo} message G2C_PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PlayerInfo != null && message.hasOwnProperty("PlayerInfo"))
                $root.NiceET.PlayerInfo.encode(message.PlayerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.PlayerInfos != null && message.PlayerInfos.length)
                for (var i = 0; i < message.PlayerInfos.length; ++i)
                    $root.NiceET.PlayerInfo.encode(message.PlayerInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.TestRepeatedString != null && message.TestRepeatedString.length)
                for (var i = 0; i < message.TestRepeatedString.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.TestRepeatedString[i]);
            if (message.TestRepeatedInt32 != null && message.TestRepeatedInt32.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.TestRepeatedInt32.length; ++i)
                    writer.int32(message.TestRepeatedInt32[i]);
                writer.ldelim();
            }
            if (message.TestRepeatedInt64 != null && message.TestRepeatedInt64.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.TestRepeatedInt64.length; ++i)
                    writer.sint64(message.TestRepeatedInt64[i]);
                writer.ldelim();
            }
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.RpcId);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified G2C_PlayerInfo message, length delimited. Does not implicitly {@link NiceET.G2C_PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NiceET.G2C_PlayerInfo
         * @static
         * @param {NiceET.IG2C_PlayerInfo} message G2C_PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G2C_PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NiceET.G2C_PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NiceET.G2C_PlayerInfo} G2C_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NiceET.G2C_PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.RpcId = reader.int32();
                    break;
                case 91:
                    message.Error = reader.int32();
                    break;
                case 92:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.PlayerInfo = $root.NiceET.PlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.PlayerInfos && message.PlayerInfos.length))
                        message.PlayerInfos = [];
                    message.PlayerInfos.push($root.NiceET.PlayerInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.TestRepeatedString && message.TestRepeatedString.length))
                        message.TestRepeatedString = [];
                    message.TestRepeatedString.push(reader.string());
                    break;
                case 4:
                    if (!(message.TestRepeatedInt32 && message.TestRepeatedInt32.length))
                        message.TestRepeatedInt32 = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.TestRepeatedInt32.push(reader.int32());
                    } else
                        message.TestRepeatedInt32.push(reader.int32());
                    break;
                case 5:
                    if (!(message.TestRepeatedInt64 && message.TestRepeatedInt64.length))
                        message.TestRepeatedInt64 = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.TestRepeatedInt64.push(reader.sint64());
                    } else
                        message.TestRepeatedInt64.push(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a G2C_PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NiceET.G2C_PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NiceET.G2C_PlayerInfo} G2C_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a G2C_PlayerInfo message.
         * @function verify
         * @memberof NiceET.G2C_PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G2C_PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                if (!$util.isInteger(message.RpcId))
                    return "RpcId: integer expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.PlayerInfo != null && message.hasOwnProperty("PlayerInfo")) {
                var error = $root.NiceET.PlayerInfo.verify(message.PlayerInfo);
                if (error)
                    return "PlayerInfo." + error;
            }
            if (message.PlayerInfos != null && message.hasOwnProperty("PlayerInfos")) {
                if (!Array.isArray(message.PlayerInfos))
                    return "PlayerInfos: array expected";
                for (var i = 0; i < message.PlayerInfos.length; ++i) {
                    var error = $root.NiceET.PlayerInfo.verify(message.PlayerInfos[i]);
                    if (error)
                        return "PlayerInfos." + error;
                }
            }
            if (message.TestRepeatedString != null && message.hasOwnProperty("TestRepeatedString")) {
                if (!Array.isArray(message.TestRepeatedString))
                    return "TestRepeatedString: array expected";
                for (var i = 0; i < message.TestRepeatedString.length; ++i)
                    if (!$util.isString(message.TestRepeatedString[i]))
                        return "TestRepeatedString: string[] expected";
            }
            if (message.TestRepeatedInt32 != null && message.hasOwnProperty("TestRepeatedInt32")) {
                if (!Array.isArray(message.TestRepeatedInt32))
                    return "TestRepeatedInt32: array expected";
                for (var i = 0; i < message.TestRepeatedInt32.length; ++i)
                    if (!$util.isInteger(message.TestRepeatedInt32[i]))
                        return "TestRepeatedInt32: integer[] expected";
            }
            if (message.TestRepeatedInt64 != null && message.hasOwnProperty("TestRepeatedInt64")) {
                if (!Array.isArray(message.TestRepeatedInt64))
                    return "TestRepeatedInt64: array expected";
                for (var i = 0; i < message.TestRepeatedInt64.length; ++i)
                    if (!$util.isInteger(message.TestRepeatedInt64[i]) && !(message.TestRepeatedInt64[i] && $util.isInteger(message.TestRepeatedInt64[i].low) && $util.isInteger(message.TestRepeatedInt64[i].high)))
                        return "TestRepeatedInt64: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a G2C_PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NiceET.G2C_PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NiceET.G2C_PlayerInfo} G2C_PlayerInfo
         */
        G2C_PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.NiceET.G2C_PlayerInfo)
                return object;
            var message = new $root.NiceET.G2C_PlayerInfo();
            if (object.RpcId != null)
                message.RpcId = object.RpcId | 0;
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.PlayerInfo != null) {
                if (typeof object.PlayerInfo !== "object")
                    throw TypeError(".NiceET.G2C_PlayerInfo.PlayerInfo: object expected");
                message.PlayerInfo = $root.NiceET.PlayerInfo.fromObject(object.PlayerInfo);
            }
            if (object.PlayerInfos) {
                if (!Array.isArray(object.PlayerInfos))
                    throw TypeError(".NiceET.G2C_PlayerInfo.PlayerInfos: array expected");
                message.PlayerInfos = [];
                for (var i = 0; i < object.PlayerInfos.length; ++i) {
                    if (typeof object.PlayerInfos[i] !== "object")
                        throw TypeError(".NiceET.G2C_PlayerInfo.PlayerInfos: object expected");
                    message.PlayerInfos[i] = $root.NiceET.PlayerInfo.fromObject(object.PlayerInfos[i]);
                }
            }
            if (object.TestRepeatedString) {
                if (!Array.isArray(object.TestRepeatedString))
                    throw TypeError(".NiceET.G2C_PlayerInfo.TestRepeatedString: array expected");
                message.TestRepeatedString = [];
                for (var i = 0; i < object.TestRepeatedString.length; ++i)
                    message.TestRepeatedString[i] = String(object.TestRepeatedString[i]);
            }
            if (object.TestRepeatedInt32) {
                if (!Array.isArray(object.TestRepeatedInt32))
                    throw TypeError(".NiceET.G2C_PlayerInfo.TestRepeatedInt32: array expected");
                message.TestRepeatedInt32 = [];
                for (var i = 0; i < object.TestRepeatedInt32.length; ++i)
                    message.TestRepeatedInt32[i] = object.TestRepeatedInt32[i] | 0;
            }
            if (object.TestRepeatedInt64) {
                if (!Array.isArray(object.TestRepeatedInt64))
                    throw TypeError(".NiceET.G2C_PlayerInfo.TestRepeatedInt64: array expected");
                message.TestRepeatedInt64 = [];
                for (var i = 0; i < object.TestRepeatedInt64.length; ++i)
                    if ($util.Long)
                        (message.TestRepeatedInt64[i] = $util.Long.fromValue(object.TestRepeatedInt64[i])).unsigned = false;
                    else if (typeof object.TestRepeatedInt64[i] === "string")
                        message.TestRepeatedInt64[i] = parseInt(object.TestRepeatedInt64[i], 10);
                    else if (typeof object.TestRepeatedInt64[i] === "number")
                        message.TestRepeatedInt64[i] = object.TestRepeatedInt64[i];
                    else if (typeof object.TestRepeatedInt64[i] === "object")
                        message.TestRepeatedInt64[i] = new $util.LongBits(object.TestRepeatedInt64[i].low >>> 0, object.TestRepeatedInt64[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a G2C_PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NiceET.G2C_PlayerInfo
         * @static
         * @param {NiceET.G2C_PlayerInfo} message G2C_PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        G2C_PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.PlayerInfos = [];
                object.TestRepeatedString = [];
                object.TestRepeatedInt32 = [];
                object.TestRepeatedInt64 = [];
            }
            if (options.defaults) {
                object.PlayerInfo = null;
                object.RpcId = 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.PlayerInfo != null && message.hasOwnProperty("PlayerInfo"))
                object.PlayerInfo = $root.NiceET.PlayerInfo.toObject(message.PlayerInfo, options);
            if (message.PlayerInfos && message.PlayerInfos.length) {
                object.PlayerInfos = [];
                for (var j = 0; j < message.PlayerInfos.length; ++j)
                    object.PlayerInfos[j] = $root.NiceET.PlayerInfo.toObject(message.PlayerInfos[j], options);
            }
            if (message.TestRepeatedString && message.TestRepeatedString.length) {
                object.TestRepeatedString = [];
                for (var j = 0; j < message.TestRepeatedString.length; ++j)
                    object.TestRepeatedString[j] = message.TestRepeatedString[j];
            }
            if (message.TestRepeatedInt32 && message.TestRepeatedInt32.length) {
                object.TestRepeatedInt32 = [];
                for (var j = 0; j < message.TestRepeatedInt32.length; ++j)
                    object.TestRepeatedInt32[j] = message.TestRepeatedInt32[j];
            }
            if (message.TestRepeatedInt64 && message.TestRepeatedInt64.length) {
                object.TestRepeatedInt64 = [];
                for (var j = 0; j < message.TestRepeatedInt64.length; ++j)
                    if (typeof message.TestRepeatedInt64[j] === "number")
                        object.TestRepeatedInt64[j] = options.longs === String ? String(message.TestRepeatedInt64[j]) : message.TestRepeatedInt64[j];
                    else
                        object.TestRepeatedInt64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.TestRepeatedInt64[j]) : options.longs === Number ? new $util.LongBits(message.TestRepeatedInt64[j].low >>> 0, message.TestRepeatedInt64[j].high >>> 0).toNumber() : message.TestRepeatedInt64[j];
            }
            if (message.RpcId != null && message.hasOwnProperty("RpcId"))
                object.RpcId = message.RpcId;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this G2C_PlayerInfo to JSON.
         * @function toJSON
         * @memberof NiceET.G2C_PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G2C_PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G2C_PlayerInfo;
    })();

    return NiceET;
})();

module.exports = $root;
