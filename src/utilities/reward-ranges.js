import moment from "moment";

export default {
  days() {
    const start = new Date(Date.now() - 86400000).toISOString().split("T")[0];

    const end = new Date().toISOString().split("T")[0];

    return { start, end };
  },
  polkadot() {
    const REFRENCE_ERA = 876;
    const ERAS_IN_DAY = 1;
    const ERAS_IN_MONTH = ERAS_IN_DAY * 30;
    const REFRENCE_DATE = moment("2022-10-26", "YYYY-MM-DD");

    const now = moment();
    const daysPast = now.diff(REFRENCE_DATE, "days") + 1;
    const latestEraEst = REFRENCE_ERA + Math.ceil(daysPast * ERAS_IN_DAY);
    const era30DaysAgoEst = latestEraEst - ERAS_IN_MONTH;

    return {
      start: era30DaysAgoEst,
      end: latestEraEst,
    };
  },
  solana() {
    const REFRENCE_EPOCH = 363;
    const EPOCHS_IN_DAY = 0.35;
    const EPOCHS_IN_MONTH = Math.ceil(EPOCHS_IN_DAY * 30);
    const REFRENCE_DATE = moment("2022-10-25", "YYYY-MM-DD");

    const now = moment();
    const daysPast = now.diff(REFRENCE_DATE, "days") + 1;
    const latestEpochEst = REFRENCE_EPOCH + Math.ceil(daysPast * EPOCHS_IN_DAY);
    const epcoh30DaysAgoEst = latestEpochEst - EPOCHS_IN_MONTH;

    return {
      start: epcoh30DaysAgoEst,
      end: latestEpochEst,
    };
  },
  near() {
    const REFRENCE_BLOCK_HEIGHT = 76953090;
    const BLOCKS_IN_SEC = 1.27;
    const BLOCKS_IN_DAY = BLOCKS_IN_SEC * 60 * 60 * 25;
    const BLOCKS_IN_7_DAYS = Math.ceil(BLOCKS_IN_DAY * 7); // NEAR Epoch table only has 7 days of data
    const REFRENCE_DATE = moment("2022-10-25", "YYYY-MM-DD");

    const now = moment();
    const daysPast = now.diff(REFRENCE_DATE, "days") + 1;
    const latestBlockEst =
      REFRENCE_BLOCK_HEIGHT + Math.ceil(daysPast * BLOCKS_IN_DAY);
    const block7DaysAgoEst = latestBlockEst - BLOCKS_IN_7_DAYS;

    return {
      start: block7DaysAgoEst,
      end: latestBlockEst,
    };
  },
};
