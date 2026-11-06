import { describe, it, expect } from "vitest";
import { generateSixDigitCode } from "../../../src/utils/generateCode.util.ts";

describe("generateSixDigitCode", () => {
  it("genera un código de exactamente 6 dígitos", () => {
    const code = generateSixDigitCode();
    expect(code).toMatch(/^\d{6}$/);
  });

  it("genera un número entre 100000 y 999999", () => {
    const num = Number(generateSixDigitCode());
    expect(num).toBeGreaterThanOrEqual(100000);
    expect(num).toBeLessThanOrEqual(999999);
  });

  it("genera códigos distintos en llamadas consecutivas", () => {
    const code1 = generateSixDigitCode();
    const code2 = generateSixDigitCode();
    expect(code1).not.toBe(code2);
  });
});
