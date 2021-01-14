import * as $protobuf from "protobufjs";
/** Namespace nice_ts. */
export namespace nice_ts {

    /** Properties of a C2R_Login. */
    interface IC2R_Login {

        /** C2R_Login Account */
        Account?: (string|null);

        /** C2R_Login Password */
        Password?: (string|null);
    }

    /** Represents a C2R_Login. */
    class C2R_Login implements IC2R_Login {

        /**
         * Constructs a new C2R_Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: nice_ts.IC2R_Login);

        /** C2R_Login Account. */
        public Account: string;

        /** C2R_Login Password. */
        public Password: string;

        /**
         * Creates a new C2R_Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2R_Login instance
         */
        public static create(properties?: nice_ts.IC2R_Login): nice_ts.C2R_Login;

        /**
         * Encodes the specified C2R_Login message. Does not implicitly {@link nice_ts.C2R_Login.verify|verify} messages.
         * @param message C2R_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: nice_ts.IC2R_Login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2R_Login message, length delimited. Does not implicitly {@link nice_ts.C2R_Login.verify|verify} messages.
         * @param message C2R_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: nice_ts.IC2R_Login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2R_Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2R_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): nice_ts.C2R_Login;

        /**
         * Decodes a C2R_Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2R_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): nice_ts.C2R_Login;

        /**
         * Verifies a C2R_Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2R_Login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2R_Login
         */
        public static fromObject(object: { [k: string]: any }): nice_ts.C2R_Login;

        /**
         * Creates a plain object from a C2R_Login message. Also converts values to other types if specified.
         * @param message C2R_Login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: nice_ts.C2R_Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2R_Login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a R2C_Login. */
    interface IR2C_Login {

        /** R2C_Login Error */
        Error?: (number|null);

        /** R2C_Login Message */
        Message?: (string|null);

        /** R2C_Login Address */
        Address?: (string|null);

        /** R2C_Login Key */
        Key?: (number|Long|null);

        /** R2C_Login GateId */
        GateId?: (number|Long|null);
    }

    /** Represents a R2C_Login. */
    class R2C_Login implements IR2C_Login {

        /**
         * Constructs a new R2C_Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: nice_ts.IR2C_Login);

        /** R2C_Login Error. */
        public Error: number;

        /** R2C_Login Message. */
        public Message: string;

        /** R2C_Login Address. */
        public Address: string;

        /** R2C_Login Key. */
        public Key: (number|Long);

        /** R2C_Login GateId. */
        public GateId: (number|Long);

        /**
         * Creates a new R2C_Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns R2C_Login instance
         */
        public static create(properties?: nice_ts.IR2C_Login): nice_ts.R2C_Login;

        /**
         * Encodes the specified R2C_Login message. Does not implicitly {@link nice_ts.R2C_Login.verify|verify} messages.
         * @param message R2C_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: nice_ts.IR2C_Login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified R2C_Login message, length delimited. Does not implicitly {@link nice_ts.R2C_Login.verify|verify} messages.
         * @param message R2C_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: nice_ts.IR2C_Login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a R2C_Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns R2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): nice_ts.R2C_Login;

        /**
         * Decodes a R2C_Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns R2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): nice_ts.R2C_Login;

        /**
         * Verifies a R2C_Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a R2C_Login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns R2C_Login
         */
        public static fromObject(object: { [k: string]: any }): nice_ts.R2C_Login;

        /**
         * Creates a plain object from a R2C_Login message. Also converts values to other types if specified.
         * @param message R2C_Login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: nice_ts.R2C_Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this R2C_Login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2G_LoginGate. */
    interface IC2G_LoginGate {

        /** C2G_LoginGate Key */
        Key?: (number|Long|null);

        /** C2G_LoginGate GateId */
        GateId?: (number|Long|null);
    }

    /** Represents a C2G_LoginGate. */
    class C2G_LoginGate implements IC2G_LoginGate {

        /**
         * Constructs a new C2G_LoginGate.
         * @param [properties] Properties to set
         */
        constructor(properties?: nice_ts.IC2G_LoginGate);

        /** C2G_LoginGate Key. */
        public Key: (number|Long);

        /** C2G_LoginGate GateId. */
        public GateId: (number|Long);

        /**
         * Creates a new C2G_LoginGate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_LoginGate instance
         */
        public static create(properties?: nice_ts.IC2G_LoginGate): nice_ts.C2G_LoginGate;

        /**
         * Encodes the specified C2G_LoginGate message. Does not implicitly {@link nice_ts.C2G_LoginGate.verify|verify} messages.
         * @param message C2G_LoginGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: nice_ts.IC2G_LoginGate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2G_LoginGate message, length delimited. Does not implicitly {@link nice_ts.C2G_LoginGate.verify|verify} messages.
         * @param message C2G_LoginGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: nice_ts.IC2G_LoginGate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2G_LoginGate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2G_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): nice_ts.C2G_LoginGate;

        /**
         * Decodes a C2G_LoginGate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2G_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): nice_ts.C2G_LoginGate;

        /**
         * Verifies a C2G_LoginGate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2G_LoginGate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2G_LoginGate
         */
        public static fromObject(object: { [k: string]: any }): nice_ts.C2G_LoginGate;

        /**
         * Creates a plain object from a C2G_LoginGate message. Also converts values to other types if specified.
         * @param message C2G_LoginGate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: nice_ts.C2G_LoginGate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2G_LoginGate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a G2C_LoginGate. */
    interface IG2C_LoginGate {

        /** G2C_LoginGate Error */
        Error?: (number|null);

        /** G2C_LoginGate Message */
        Message?: (string|null);

        /** G2C_LoginGate PlayerId */
        PlayerId?: (number|Long|null);
    }

    /** Represents a G2C_LoginGate. */
    class G2C_LoginGate implements IG2C_LoginGate {

        /**
         * Constructs a new G2C_LoginGate.
         * @param [properties] Properties to set
         */
        constructor(properties?: nice_ts.IG2C_LoginGate);

        /** G2C_LoginGate Error. */
        public Error: number;

        /** G2C_LoginGate Message. */
        public Message: string;

        /** G2C_LoginGate PlayerId. */
        public PlayerId: (number|Long);

        /**
         * Creates a new G2C_LoginGate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_LoginGate instance
         */
        public static create(properties?: nice_ts.IG2C_LoginGate): nice_ts.G2C_LoginGate;

        /**
         * Encodes the specified G2C_LoginGate message. Does not implicitly {@link nice_ts.G2C_LoginGate.verify|verify} messages.
         * @param message G2C_LoginGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: nice_ts.IG2C_LoginGate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified G2C_LoginGate message, length delimited. Does not implicitly {@link nice_ts.G2C_LoginGate.verify|verify} messages.
         * @param message G2C_LoginGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: nice_ts.IG2C_LoginGate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_LoginGate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G2C_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): nice_ts.G2C_LoginGate;

        /**
         * Decodes a G2C_LoginGate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G2C_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): nice_ts.G2C_LoginGate;

        /**
         * Verifies a G2C_LoginGate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a G2C_LoginGate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns G2C_LoginGate
         */
        public static fromObject(object: { [k: string]: any }): nice_ts.G2C_LoginGate;

        /**
         * Creates a plain object from a G2C_LoginGate message. Also converts values to other types if specified.
         * @param message G2C_LoginGate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: nice_ts.G2C_LoginGate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this G2C_LoginGate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2GS_Test. */
    interface IC2GS_Test {

        /** C2GS_Test testID */
        testID?: (number|null);

        /** C2GS_Test testName */
        testName?: (string|null);
    }

    /** Represents a C2GS_Test. */
    class C2GS_Test implements IC2GS_Test {

        /**
         * Constructs a new C2GS_Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: nice_ts.IC2GS_Test);

        /** C2GS_Test testID. */
        public testID: number;

        /** C2GS_Test testName. */
        public testName: string;

        /**
         * Creates a new C2GS_Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GS_Test instance
         */
        public static create(properties?: nice_ts.IC2GS_Test): nice_ts.C2GS_Test;

        /**
         * Encodes the specified C2GS_Test message. Does not implicitly {@link nice_ts.C2GS_Test.verify|verify} messages.
         * @param message C2GS_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: nice_ts.IC2GS_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GS_Test message, length delimited. Does not implicitly {@link nice_ts.C2GS_Test.verify|verify} messages.
         * @param message C2GS_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: nice_ts.IC2GS_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GS_Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GS_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): nice_ts.C2GS_Test;

        /**
         * Decodes a C2GS_Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GS_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): nice_ts.C2GS_Test;

        /**
         * Verifies a C2GS_Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GS_Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GS_Test
         */
        public static fromObject(object: { [k: string]: any }): nice_ts.C2GS_Test;

        /**
         * Creates a plain object from a C2GS_Test message. Also converts values to other types if specified.
         * @param message C2GS_Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: nice_ts.C2GS_Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GS_Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GS2C_Test. */
    interface IGS2C_Test {

        /** GS2C_Test Error */
        Error?: (number|null);

        /** GS2C_Test Message */
        Message?: (string|null);

        /** GS2C_Test testResponse */
        testResponse?: (string|null);
    }

    /** Represents a GS2C_Test. */
    class GS2C_Test implements IGS2C_Test {

        /**
         * Constructs a new GS2C_Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: nice_ts.IGS2C_Test);

        /** GS2C_Test Error. */
        public Error: number;

        /** GS2C_Test Message. */
        public Message: string;

        /** GS2C_Test testResponse. */
        public testResponse: string;

        /**
         * Creates a new GS2C_Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GS2C_Test instance
         */
        public static create(properties?: nice_ts.IGS2C_Test): nice_ts.GS2C_Test;

        /**
         * Encodes the specified GS2C_Test message. Does not implicitly {@link nice_ts.GS2C_Test.verify|verify} messages.
         * @param message GS2C_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: nice_ts.IGS2C_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GS2C_Test message, length delimited. Does not implicitly {@link nice_ts.GS2C_Test.verify|verify} messages.
         * @param message GS2C_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: nice_ts.IGS2C_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GS2C_Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GS2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): nice_ts.GS2C_Test;

        /**
         * Decodes a GS2C_Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GS2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): nice_ts.GS2C_Test;

        /**
         * Verifies a GS2C_Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GS2C_Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GS2C_Test
         */
        public static fromObject(object: { [k: string]: any }): nice_ts.GS2C_Test;

        /**
         * Creates a plain object from a GS2C_Test message. Also converts values to other types if specified.
         * @param message GS2C_Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: nice_ts.GS2C_Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GS2C_Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
