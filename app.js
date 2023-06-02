url="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Load page and save data as variable
window.onload = function() {
    d3.json(url).then(function(data) {

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

var select =d3.select("#selDataset");

data.names.forEach(function(name){
    select.append("option").text(name).property("value",name);
});

// Add an event listener to the dropdown menu
d3.select("#selDataset").on("change", updatePlotly);
    
updateBubble(data.names[0], data);
updatePlot(data.names[0], data);
updateDemographic(data.names[0], data);
updateGauge(data.names[0], data);}).catch(function(error) {
    console.log(error);
});


function updateGauge (newSample, data) {
    // Get washing frequency
    var wfreq = data.metadata.filter(sample => sample.id == newSample)[0].wfreq;

    // Gauge chart trace
    var traceGauge = {
        domain: { x: [0, 1], y: [0, 1] },
        value: wfreq,
        title: { text: "Weekly Washing Frequency" },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: { range: [0, 9] },
            steps: [
                { range: [0, 1], color: "#ffffff" },
                { range: [1, 2], color: "#e6f2ff" },
                { range: [2, 3], color: "#ccd9ff" },
                { range: [3, 4], color: "#b3c2ff" },
                { range: [4, 5], color: "#99abff" },
                { range: [5, 6], color: "#8094ff" },
                { range: [6, 7], color: "#668cff" },
                { range: [7, 8], color: "#4d85ff" },
                { range: [8, 9], color: "#337dff" }
            ]
        }
    };

    var dataGauge = [traceGauge];

    var layoutGauge = { 
        width: 600, 
        height: 500, 
        margin: { t: 20, b: 40, l:100, r:100 } 
    };
    
    Plotly.newPlot('gauge', dataGauge, layoutGauge);
}




function updatePlot (newSample, data) {

    var sample = data.samples.filter(sample => sample.id == newSample)[0];

    //Get the top 10 OTUs for the selected sample
    var sampleValues =sample.sample_values.slice(0,10).reverse();
    var otuIds = sample.otu_ids.map(id => "OTU " + id).slice(0,10).reverse();
    var otuLabels = sample.otu_labels.map(label => label).slice(0,10).reverse();

    var trace1 ={
        x: sampleValues,
        y: otuIds,
        text: otuLabels,
        type: 'bar',
        orientation:'h'
    };

    var data =[trace1];

    var layout ={
        title: "Top 10 OTUs",
        margin: {
            l:100,
            r:100,
            t:100,
            b:100
}};

Plotly.newPlot("bar", data, layout);}

// This function is called when the dropdown menu selection changes
function updatePlotly() {
    // Get the new sample from the dropdown menu
    var newSample = d3.select("#selDataset").property("value");

    // Load the new sample data and update the plot
    d3.json(url).then(function(data) {
        updatePlot(newSample, data);
        updateBubble(newSample, data);
        updateDemographic(newSample, data);
        updateGauge(newSample, data);
    });
}

//Display the sample metadata, i.e., an individual's demographic information.

//Display each key-value pair from the metadata JSON object somewhere on the page.

function updateDemographic (newSample, data) {

    //metadata={"id": 1526, "ethnicity": "Caucasian", "gender": "M", "age": 6.0, "location": "NC", "bbtype": "I", "wfreq": 7.0}

    var sample = data.metadata.filter(sample => sample.id == newSample)[0];

    obj ={ 
        "id": sample.id,
        "ethnicity": sample.ethnicity,
        "gender": sample.gender,
        "age": sample.age,
        "location": sample.location,
        "bbtype": sample.bbtype,
        "wfreq": sample.wfreq
    }

    var list =d3.select("#sample-metadata").html("");

    Object.entries(obj).forEach(([key, value]) => {
        list.append("li").text(`${key}: ${value}`);
    });
}



// Create a bubble chart that displays each sample.
function updateBubble (newSample, data) {
    
        var sample = data.samples.filter(sample => sample.id == newSample)[0];
    
        //Get the top 10 OTUs for the selected sample
        var sampleValues =sample.sample_values;
        var otuIds = sample.otu_ids;
        var otuLabels = sample.otu_labels;
    
        var trace2 ={
            x: otuIds,
            y: sampleValues,
            text: otuLabels,
            mode: 'markers',
            marker: {
                size: sampleValues,
                color: otuIds
            }
        };
    
        var data =[trace2];
    
        var layout ={
            title: "Top 10 OTUs",
            margin: {
                l:100,
                r:100,
                t:100,
                b:100
    }};


Plotly.newPlot("bubble", data, layout);

}

//Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. 
// to plot the weekly washing frequency of the individual.

//You will need to modify the example gauge code to account for values ranging from 0 through 9.







}