import "@testing-library/jest-dom";
import {cleanup} from "@testing-library/react";
import {TextEncoder, TextDecoder} from "text-encoding-utf-8";

Object.assign(global, {TextDecoder, TextEncoder});

afterEach(cleanup);
