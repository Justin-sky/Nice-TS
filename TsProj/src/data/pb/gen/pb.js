/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var Long = require("long");
$protobuf.util.Long = Long;
$protobuf.configure();


// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.nice_ts = (function() {

    /**
     * Namespace nice_ts.
     * @exports nice_ts
     * @namespace
     */
    var nice_ts = {};

    nice_ts.C2R_Login = (function() {

        /**
         * Properties of a C2R_Login.
         * @memberof nice_ts
         * @interface IC2R_Login
         * @property {string|null} [Account] C2R_Login Account
         * @property {string|null} [Password] C2R_Login Password
         */

        /**
         * Constructs a new C2R_Login.
         * @memberof nice_ts
         * @classdesc Represents a C2R_Login.
         * @implements IC2R_Login
         * @constructor
         * @param {nice_ts.IC2R_Login=} [properties] Properties to set
         */
        function C2R_Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2R_Login Account.
         * @member {string} Account
         * @memberof nice_ts.C2R_Login
         * @instance
         */
        C2R_Login.prototype.Account = "";

        /**
         * C2R_Login Password.
         * @member {string} Password
         * @memberof nice_ts.C2R_Login
         * @instance
         */
        C2R_Login.prototype.Password = "";

        /**
         * Creates a new C2R_Login instance using the specified properties.
         * @function create
         * @memberof nice_ts.C2R_Login
         * @static
         * @param {nice_ts.IC2R_Login=} [properties] Properties to set
         * @returns {nice_ts.C2R_Login} C2R_Login instance
         */
        C2R_Login.create = function create(properties) {
            return new C2R_Login(properties);
        };

        /**
         * Encodes the specified C2R_Login message. Does not implicitly {@link nice_ts.C2R_Login.verify|verify} messages.
         * @function encode
         * @memberof nice_ts.C2R_Login
         * @static
         * @param {nice_ts.IC2R_Login} message C2R_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2R_Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Account != null && Object.hasOwnProperty.call(message, "Account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Account);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Password);
            return writer;
        };

        /**
         * Encodes the specified C2R_Login message, length delimited. Does not implicitly {@link nice_ts.C2R_Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nice_ts.C2R_Login
         * @static
         * @param {nice_ts.IC2R_Login} message C2R_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2R_Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2R_Login message from the specified reader or buffer.
         * @function decode
         * @memberof nice_ts.C2R_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nice_ts.C2R_Login} C2R_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2R_Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nice_ts.C2R_Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
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
         * @memberof nice_ts.C2R_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nice_ts.C2R_Login} C2R_Login
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
         * @memberof nice_ts.C2R_Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2R_Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
         * @memberof nice_ts.C2R_Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nice_ts.C2R_Login} C2R_Login
         */
        C2R_Login.fromObject = function fromObject(object) {
            if (object instanceof $root.nice_ts.C2R_Login)
                return object;
            var message = new $root.nice_ts.C2R_Login();
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a C2R_Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof nice_ts.C2R_Login
         * @static
         * @param {nice_ts.C2R_Login} message C2R_Login
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
            }
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            return object;
        };

        /**
         * Converts this C2R_Login to JSON.
         * @function toJSON
         * @memberof nice_ts.C2R_Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2R_Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2R_Login;
    })();

    nice_ts.R2C_Login = (function() {

        /**
         * Properties of a R2C_Login.
         * @memberof nice_ts
         * @interface IR2C_Login
         * @property {number|null} [Error] R2C_Login Error
         * @property {string|null} [Message] R2C_Login Message
         * @property {string|null} [Address] R2C_Login Address
         * @property {number|Long|null} [Key] R2C_Login Key
         * @property {number|Long|null} [GateId] R2C_Login GateId
         */

        /**
         * Constructs a new R2C_Login.
         * @memberof nice_ts
         * @classdesc Represents a R2C_Login.
         * @implements IR2C_Login
         * @constructor
         * @param {nice_ts.IR2C_Login=} [properties] Properties to set
         */
        function R2C_Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * R2C_Login Error.
         * @member {number} Error
         * @memberof nice_ts.R2C_Login
         * @instance
         */
        R2C_Login.prototype.Error = 0;

        /**
         * R2C_Login Message.
         * @member {string} Message
         * @memberof nice_ts.R2C_Login
         * @instance
         */
        R2C_Login.prototype.Message = "";

        /**
         * R2C_Login Address.
         * @member {string} Address
         * @memberof nice_ts.R2C_Login
         * @instance
         */
        R2C_Login.prototype.Address = "";

        /**
         * R2C_Login Key.
         * @member {number|Long} Key
         * @memberof nice_ts.R2C_Login
         * @instance
         */
        R2C_Login.prototype.Key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * R2C_Login GateId.
         * @member {number|Long} GateId
         * @memberof nice_ts.R2C_Login
         * @instance
         */
        R2C_Login.prototype.GateId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new R2C_Login instance using the specified properties.
         * @function create
         * @memberof nice_ts.R2C_Login
         * @static
         * @param {nice_ts.IR2C_Login=} [properties] Properties to set
         * @returns {nice_ts.R2C_Login} R2C_Login instance
         */
        R2C_Login.create = function create(properties) {
            return new R2C_Login(properties);
        };

        /**
         * Encodes the specified R2C_Login message. Does not implicitly {@link nice_ts.R2C_Login.verify|verify} messages.
         * @function encode
         * @memberof nice_ts.R2C_Login
         * @static
         * @param {nice_ts.IR2C_Login} message R2C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        R2C_Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Address != null && Object.hasOwnProperty.call(message, "Address"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Address);
            if (message.Key != null && Object.hasOwnProperty.call(message, "Key"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Key);
            if (message.GateId != null && Object.hasOwnProperty.call(message, "GateId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.GateId);
            if (message.Error != null && Object.hasOwnProperty.call(message, "Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified R2C_Login message, length delimited. Does not implicitly {@link nice_ts.R2C_Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nice_ts.R2C_Login
         * @static
         * @param {nice_ts.IR2C_Login} message R2C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        R2C_Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a R2C_Login message from the specified reader or buffer.
         * @function decode
         * @memberof nice_ts.R2C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nice_ts.R2C_Login} R2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        R2C_Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nice_ts.R2C_Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
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
                    message.Key = reader.int64();
                    break;
                case 3:
                    message.GateId = reader.int64();
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
         * @memberof nice_ts.R2C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nice_ts.R2C_Login} R2C_Login
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
         * @memberof nice_ts.R2C_Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        R2C_Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
         * @memberof nice_ts.R2C_Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nice_ts.R2C_Login} R2C_Login
         */
        R2C_Login.fromObject = function fromObject(object) {
            if (object instanceof $root.nice_ts.R2C_Login)
                return object;
            var message = new $root.nice_ts.R2C_Login();
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
         * @memberof nice_ts.R2C_Login
         * @static
         * @param {nice_ts.R2C_Login} message R2C_Login
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
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this R2C_Login to JSON.
         * @function toJSON
         * @memberof nice_ts.R2C_Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        R2C_Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return R2C_Login;
    })();

    nice_ts.C2G_LoginGate = (function() {

        /**
         * Properties of a C2G_LoginGate.
         * @memberof nice_ts
         * @interface IC2G_LoginGate
         * @property {number|Long|null} [Key] C2G_LoginGate Key
         * @property {number|Long|null} [GateId] C2G_LoginGate GateId
         */

        /**
         * Constructs a new C2G_LoginGate.
         * @memberof nice_ts
         * @classdesc Represents a C2G_LoginGate.
         * @implements IC2G_LoginGate
         * @constructor
         * @param {nice_ts.IC2G_LoginGate=} [properties] Properties to set
         */
        function C2G_LoginGate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2G_LoginGate Key.
         * @member {number|Long} Key
         * @memberof nice_ts.C2G_LoginGate
         * @instance
         */
        C2G_LoginGate.prototype.Key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * C2G_LoginGate GateId.
         * @member {number|Long} GateId
         * @memberof nice_ts.C2G_LoginGate
         * @instance
         */
        C2G_LoginGate.prototype.GateId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2G_LoginGate instance using the specified properties.
         * @function create
         * @memberof nice_ts.C2G_LoginGate
         * @static
         * @param {nice_ts.IC2G_LoginGate=} [properties] Properties to set
         * @returns {nice_ts.C2G_LoginGate} C2G_LoginGate instance
         */
        C2G_LoginGate.create = function create(properties) {
            return new C2G_LoginGate(properties);
        };

        /**
         * Encodes the specified C2G_LoginGate message. Does not implicitly {@link nice_ts.C2G_LoginGate.verify|verify} messages.
         * @function encode
         * @memberof nice_ts.C2G_LoginGate
         * @static
         * @param {nice_ts.IC2G_LoginGate} message C2G_LoginGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_LoginGate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Key != null && Object.hasOwnProperty.call(message, "Key"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Key);
            if (message.GateId != null && Object.hasOwnProperty.call(message, "GateId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.GateId);
            return writer;
        };

        /**
         * Encodes the specified C2G_LoginGate message, length delimited. Does not implicitly {@link nice_ts.C2G_LoginGate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nice_ts.C2G_LoginGate
         * @static
         * @param {nice_ts.IC2G_LoginGate} message C2G_LoginGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_LoginGate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2G_LoginGate message from the specified reader or buffer.
         * @function decode
         * @memberof nice_ts.C2G_LoginGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nice_ts.C2G_LoginGate} C2G_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_LoginGate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nice_ts.C2G_LoginGate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Key = reader.int64();
                    break;
                case 2:
                    message.GateId = reader.int64();
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
         * @memberof nice_ts.C2G_LoginGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nice_ts.C2G_LoginGate} C2G_LoginGate
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
         * @memberof nice_ts.C2G_LoginGate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2G_LoginGate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
         * @memberof nice_ts.C2G_LoginGate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nice_ts.C2G_LoginGate} C2G_LoginGate
         */
        C2G_LoginGate.fromObject = function fromObject(object) {
            if (object instanceof $root.nice_ts.C2G_LoginGate)
                return object;
            var message = new $root.nice_ts.C2G_LoginGate();
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
         * @memberof nice_ts.C2G_LoginGate
         * @static
         * @param {nice_ts.C2G_LoginGate} message C2G_LoginGate
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
            return object;
        };

        /**
         * Converts this C2G_LoginGate to JSON.
         * @function toJSON
         * @memberof nice_ts.C2G_LoginGate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2G_LoginGate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2G_LoginGate;
    })();

    nice_ts.G2C_LoginGate = (function() {

        /**
         * Properties of a G2C_LoginGate.
         * @memberof nice_ts
         * @interface IG2C_LoginGate
         * @property {number|null} [Error] G2C_LoginGate Error
         * @property {string|null} [Message] G2C_LoginGate Message
         * @property {number|Long|null} [PlayerId] G2C_LoginGate PlayerId
         */

        /**
         * Constructs a new G2C_LoginGate.
         * @memberof nice_ts
         * @classdesc Represents a G2C_LoginGate.
         * @implements IG2C_LoginGate
         * @constructor
         * @param {nice_ts.IG2C_LoginGate=} [properties] Properties to set
         */
        function G2C_LoginGate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * G2C_LoginGate Error.
         * @member {number} Error
         * @memberof nice_ts.G2C_LoginGate
         * @instance
         */
        G2C_LoginGate.prototype.Error = 0;

        /**
         * G2C_LoginGate Message.
         * @member {string} Message
         * @memberof nice_ts.G2C_LoginGate
         * @instance
         */
        G2C_LoginGate.prototype.Message = "";

        /**
         * G2C_LoginGate PlayerId.
         * @member {number|Long} PlayerId
         * @memberof nice_ts.G2C_LoginGate
         * @instance
         */
        G2C_LoginGate.prototype.PlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new G2C_LoginGate instance using the specified properties.
         * @function create
         * @memberof nice_ts.G2C_LoginGate
         * @static
         * @param {nice_ts.IG2C_LoginGate=} [properties] Properties to set
         * @returns {nice_ts.G2C_LoginGate} G2C_LoginGate instance
         */
        G2C_LoginGate.create = function create(properties) {
            return new G2C_LoginGate(properties);
        };

        /**
         * Encodes the specified G2C_LoginGate message. Does not implicitly {@link nice_ts.G2C_LoginGate.verify|verify} messages.
         * @function encode
         * @memberof nice_ts.G2C_LoginGate
         * @static
         * @param {nice_ts.IG2C_LoginGate} message G2C_LoginGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_LoginGate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PlayerId != null && Object.hasOwnProperty.call(message, "PlayerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.PlayerId);
            if (message.Error != null && Object.hasOwnProperty.call(message, "Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified G2C_LoginGate message, length delimited. Does not implicitly {@link nice_ts.G2C_LoginGate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nice_ts.G2C_LoginGate
         * @static
         * @param {nice_ts.IG2C_LoginGate} message G2C_LoginGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_LoginGate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G2C_LoginGate message from the specified reader or buffer.
         * @function decode
         * @memberof nice_ts.G2C_LoginGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nice_ts.G2C_LoginGate} G2C_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_LoginGate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nice_ts.G2C_LoginGate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 91:
                    message.Error = reader.int32();
                    break;
                case 92:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.PlayerId = reader.int64();
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
         * @memberof nice_ts.G2C_LoginGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nice_ts.G2C_LoginGate} G2C_LoginGate
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
         * @memberof nice_ts.G2C_LoginGate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G2C_LoginGate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
         * @memberof nice_ts.G2C_LoginGate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nice_ts.G2C_LoginGate} G2C_LoginGate
         */
        G2C_LoginGate.fromObject = function fromObject(object) {
            if (object instanceof $root.nice_ts.G2C_LoginGate)
                return object;
            var message = new $root.nice_ts.G2C_LoginGate();
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
         * @memberof nice_ts.G2C_LoginGate
         * @static
         * @param {nice_ts.G2C_LoginGate} message G2C_LoginGate
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
                object.Error = 0;
                object.Message = "";
            }
            if (message.PlayerId != null && message.hasOwnProperty("PlayerId"))
                if (typeof message.PlayerId === "number")
                    object.PlayerId = options.longs === String ? String(message.PlayerId) : message.PlayerId;
                else
                    object.PlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.PlayerId) : options.longs === Number ? new $util.LongBits(message.PlayerId.low >>> 0, message.PlayerId.high >>> 0).toNumber() : message.PlayerId;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this G2C_LoginGate to JSON.
         * @function toJSON
         * @memberof nice_ts.G2C_LoginGate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G2C_LoginGate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G2C_LoginGate;
    })();

    nice_ts.C2GS_Test = (function() {

        /**
         * Properties of a C2GS_Test.
         * @memberof nice_ts
         * @interface IC2GS_Test
         * @property {number|null} [testID] C2GS_Test testID
         * @property {string|null} [testName] C2GS_Test testName
         */

        /**
         * Constructs a new C2GS_Test.
         * @memberof nice_ts
         * @classdesc Represents a C2GS_Test.
         * @implements IC2GS_Test
         * @constructor
         * @param {nice_ts.IC2GS_Test=} [properties] Properties to set
         */
        function C2GS_Test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GS_Test testID.
         * @member {number} testID
         * @memberof nice_ts.C2GS_Test
         * @instance
         */
        C2GS_Test.prototype.testID = 0;

        /**
         * C2GS_Test testName.
         * @member {string} testName
         * @memberof nice_ts.C2GS_Test
         * @instance
         */
        C2GS_Test.prototype.testName = "";

        /**
         * Creates a new C2GS_Test instance using the specified properties.
         * @function create
         * @memberof nice_ts.C2GS_Test
         * @static
         * @param {nice_ts.IC2GS_Test=} [properties] Properties to set
         * @returns {nice_ts.C2GS_Test} C2GS_Test instance
         */
        C2GS_Test.create = function create(properties) {
            return new C2GS_Test(properties);
        };

        /**
         * Encodes the specified C2GS_Test message. Does not implicitly {@link nice_ts.C2GS_Test.verify|verify} messages.
         * @function encode
         * @memberof nice_ts.C2GS_Test
         * @static
         * @param {nice_ts.IC2GS_Test} message C2GS_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GS_Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.testID != null && Object.hasOwnProperty.call(message, "testID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.testID);
            if (message.testName != null && Object.hasOwnProperty.call(message, "testName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.testName);
            return writer;
        };

        /**
         * Encodes the specified C2GS_Test message, length delimited. Does not implicitly {@link nice_ts.C2GS_Test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nice_ts.C2GS_Test
         * @static
         * @param {nice_ts.IC2GS_Test} message C2GS_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GS_Test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GS_Test message from the specified reader or buffer.
         * @function decode
         * @memberof nice_ts.C2GS_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nice_ts.C2GS_Test} C2GS_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GS_Test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nice_ts.C2GS_Test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.testID = reader.int32();
                    break;
                case 2:
                    message.testName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2GS_Test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof nice_ts.C2GS_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nice_ts.C2GS_Test} C2GS_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GS_Test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GS_Test message.
         * @function verify
         * @memberof nice_ts.C2GS_Test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GS_Test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.testID != null && message.hasOwnProperty("testID"))
                if (!$util.isInteger(message.testID))
                    return "testID: integer expected";
            if (message.testName != null && message.hasOwnProperty("testName"))
                if (!$util.isString(message.testName))
                    return "testName: string expected";
            return null;
        };

        /**
         * Creates a C2GS_Test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof nice_ts.C2GS_Test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nice_ts.C2GS_Test} C2GS_Test
         */
        C2GS_Test.fromObject = function fromObject(object) {
            if (object instanceof $root.nice_ts.C2GS_Test)
                return object;
            var message = new $root.nice_ts.C2GS_Test();
            if (object.testID != null)
                message.testID = object.testID | 0;
            if (object.testName != null)
                message.testName = String(object.testName);
            return message;
        };

        /**
         * Creates a plain object from a C2GS_Test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof nice_ts.C2GS_Test
         * @static
         * @param {nice_ts.C2GS_Test} message C2GS_Test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GS_Test.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.testID = 0;
                object.testName = "";
            }
            if (message.testID != null && message.hasOwnProperty("testID"))
                object.testID = message.testID;
            if (message.testName != null && message.hasOwnProperty("testName"))
                object.testName = message.testName;
            return object;
        };

        /**
         * Converts this C2GS_Test to JSON.
         * @function toJSON
         * @memberof nice_ts.C2GS_Test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GS_Test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GS_Test;
    })();

    nice_ts.GS2C_Test = (function() {

        /**
         * Properties of a GS2C_Test.
         * @memberof nice_ts
         * @interface IGS2C_Test
         * @property {number|null} [Error] GS2C_Test Error
         * @property {string|null} [Message] GS2C_Test Message
         * @property {string|null} [testResponse] GS2C_Test testResponse
         */

        /**
         * Constructs a new GS2C_Test.
         * @memberof nice_ts
         * @classdesc Represents a GS2C_Test.
         * @implements IGS2C_Test
         * @constructor
         * @param {nice_ts.IGS2C_Test=} [properties] Properties to set
         */
        function GS2C_Test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GS2C_Test Error.
         * @member {number} Error
         * @memberof nice_ts.GS2C_Test
         * @instance
         */
        GS2C_Test.prototype.Error = 0;

        /**
         * GS2C_Test Message.
         * @member {string} Message
         * @memberof nice_ts.GS2C_Test
         * @instance
         */
        GS2C_Test.prototype.Message = "";

        /**
         * GS2C_Test testResponse.
         * @member {string} testResponse
         * @memberof nice_ts.GS2C_Test
         * @instance
         */
        GS2C_Test.prototype.testResponse = "";

        /**
         * Creates a new GS2C_Test instance using the specified properties.
         * @function create
         * @memberof nice_ts.GS2C_Test
         * @static
         * @param {nice_ts.IGS2C_Test=} [properties] Properties to set
         * @returns {nice_ts.GS2C_Test} GS2C_Test instance
         */
        GS2C_Test.create = function create(properties) {
            return new GS2C_Test(properties);
        };

        /**
         * Encodes the specified GS2C_Test message. Does not implicitly {@link nice_ts.GS2C_Test.verify|verify} messages.
         * @function encode
         * @memberof nice_ts.GS2C_Test
         * @static
         * @param {nice_ts.IGS2C_Test} message GS2C_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2C_Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.testResponse != null && Object.hasOwnProperty.call(message, "testResponse"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.testResponse);
            if (message.Error != null && Object.hasOwnProperty.call(message, "Error"))
                writer.uint32(/* id 91, wireType 0 =*/728).int32(message.Error);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified GS2C_Test message, length delimited. Does not implicitly {@link nice_ts.GS2C_Test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nice_ts.GS2C_Test
         * @static
         * @param {nice_ts.IGS2C_Test} message GS2C_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2C_Test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GS2C_Test message from the specified reader or buffer.
         * @function decode
         * @memberof nice_ts.GS2C_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nice_ts.GS2C_Test} GS2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2C_Test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nice_ts.GS2C_Test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 91:
                    message.Error = reader.int32();
                    break;
                case 92:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.testResponse = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GS2C_Test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof nice_ts.GS2C_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nice_ts.GS2C_Test} GS2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2C_Test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GS2C_Test message.
         * @function verify
         * @memberof nice_ts.GS2C_Test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GS2C_Test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.testResponse != null && message.hasOwnProperty("testResponse"))
                if (!$util.isString(message.testResponse))
                    return "testResponse: string expected";
            return null;
        };

        /**
         * Creates a GS2C_Test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof nice_ts.GS2C_Test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nice_ts.GS2C_Test} GS2C_Test
         */
        GS2C_Test.fromObject = function fromObject(object) {
            if (object instanceof $root.nice_ts.GS2C_Test)
                return object;
            var message = new $root.nice_ts.GS2C_Test();
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.testResponse != null)
                message.testResponse = String(object.testResponse);
            return message;
        };

        /**
         * Creates a plain object from a GS2C_Test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof nice_ts.GS2C_Test
         * @static
         * @param {nice_ts.GS2C_Test} message GS2C_Test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GS2C_Test.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.testResponse = "";
                object.Error = 0;
                object.Message = "";
            }
            if (message.testResponse != null && message.hasOwnProperty("testResponse"))
                object.testResponse = message.testResponse;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this GS2C_Test to JSON.
         * @function toJSON
         * @memberof nice_ts.GS2C_Test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GS2C_Test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GS2C_Test;
    })();

    return nice_ts;
})();

module.exports = $root;
