function toggleMetricImperial () {
    let allImperials = document.querySelectorAll(".imperial");
    let metrics = document.querySelectorAll(".metric");

    for (const measureImp of allImperials) {
        measureImp.classList.toggle("invisible");
    }

    for (const measureMetric of metrics) {
        measureMetric.classList.toggle("invisible");
    }
};

export { toggleMetricImperial }