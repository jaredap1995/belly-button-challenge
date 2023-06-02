# Belly Button Biodiversity Dashboard

## Background
In this project, we create an interactive dashboard to explore the Belly Button Biodiversity dataset. This dataset catalogs the microbes colonizing human navels and reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs) are present in more than 70% of people, while the rest are relatively rare.

## Getting Started
1. Create a new repository named `belly-button-challenge`.
2. Clone the repository to your local machine.
3. Inside your local git repository, copy the files from the StarterCode folder contained within the Module 14 Challenge zip file - i.e. index.html, samples.json, and the static folder.

   **Note:** The samples.json file is provided for reference. You won't need to access it locally.
   
4. Push the changes to GitHub and deploy the repository to GitHub Pages.

## Instructions
Complete the following tasks:

### 1. Data Loading
Use the D3 library to read in `samples.json` from the URL:

`https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

### 2. Bar Chart
Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. The chart should have the following specifications:

- `sample_values` as the values for the bar chart.
- `otu_ids` as the labels for the bar chart.
- `otu_labels` as the hovertext for the chart.

### 3. Bubble Chart
Create a bubble chart that displays each sample with the following specifications:

- `otu_ids` for the x values.
- `sample_values` for the y values.
- `sample_values` for the marker size.
- `otu_ids` for the marker colors.
- `otu_labels` for the text values.

### 4. Metadata Display
Display the sample metadata - i.e., an individual's demographic information. Each key-value pair from the metadata JSON object should be displayed somewhere on the page.

### 5. Dashboard Updates
The plots and the metadata display should update whenever a new sample is selected from the dropdown menu.

Feel free to create any layout you like for your dashboard. Here is an example:

![Example Dashboard](dashboard_example.png)

## Deployment
Deploy your app to a free static page hosting service, such as GitHub Pages. 

## Submission
Submit the links to your GitHub repo and your deployment. Your repository should have regular commits and a thorough README.md file. 

## Files
The necessary files for this project can be found [here](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/Module_14_Challenge_files.zip).
