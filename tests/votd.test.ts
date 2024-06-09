import { getVotd } from "../src/api/v1/functions/votd";
import { expect, it, describe } from 'vitest';

describe("getVotd", () => {
    it("VOTD", async () => {
        const verse = await getVotd();

        expect(verse?.citation).toBeDefined();
        expect(verse?.passage).toBeDefined();
    });
});
