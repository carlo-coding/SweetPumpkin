const MODE = process.env.MOBSTER_MODE || "DEV";

function devLogger(...args) {
    console.log(...args);
}

const log = (MODE === "DEV")? devLogger : ()=>{};

export default log;