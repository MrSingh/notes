---
title: "How to deal with data quaility issues"
date: 2024-09-13T07:00:00
description: ""
draft: false
labels: ""
slug: "data_quality"
images: ["data_quality.jpg"]
---

<img class="preview" src="../../images/data_quality.jpg" alt="Man fustreated with dirty data">

> According to <a href="https://www.experian.com/blogs/news/2021/02/25/highlights-2021-global-data-management-research" target="_blank">Experian's 2021 Global Data Management Research</a>, 'Fifty-five percent of business leaders say they lack trust in their data assets, hindering their ability to be fully data driven.'

## What are Data Quality Issues?
Data quality issues range from basic problems like duplicate data, format issues, and invalid data to more complex challenges such as data bias, ambiguous data, and unstructured data. The table below shows a more comprehensive list of data issues. 

#### Table of Data Issues

| **Title**               | **Description**                                                                                                       |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------|
| **Duplicate Data**       | Multiple records for the same entity, such as a customer appearing more than once in a database.                      |
| **Redundant Data**       | Data that is repeated unnecessarily, such as multiple copies of the same file or record stored in different locations. |
| **Orphaned Data**        | Data that has no link to other data, such as a transaction record without a corresponding customer record.             |
| **Incomplete Data**      | Missing critical information, such as an address without a postal code or a customer record without a phone number.   |
| **Truncated Data**       | Data that is cut off or incomplete due to system constraints or field limitations, such as a name being shortened.     |
| **Inaccurate Data**      | Incorrect information, such as misspelled names, wrong addresses, or incorrect numerical values.                      |
| **Outdated Data**        | Information that is no longer current, such as old contact details or outdated product information.                   |
| **Conflicting Data**     | Data where different sources or systems provide conflicting information, such as different addresses for the same entity. |
| **Invalid Data**         | Data that doesn’t meet specific validation rules, such as an email address without a valid format (e.g., missing “@”). |
| **Data Format Issues**   | Data that does not conform to expected formats, such as text in a numerical field.                                    |
| **Data Type Mismatch**   | Data entered in the wrong type or format, such as letters in a numeric field.                                         |
| **Data Integrity Violations** | Data that violates predefined rules or constraints, such as duplicate primary keys or foreign key mismatches.     |
| **Inconsistent Data**    | Data that varies in format or structure, such as dates recorded in different formats (e.g., DD/MM/YYYY vs. MM/DD/YYYY).|
| **Non-Standardized Data**| Data that lacks consistent standards for naming, classification, or measurement, such as different units of measure.  |
| **Ambiguous Data**       | Data that lacks clarity or context, making it difficult to interpret, such as unclear abbreviations or codes.         |
| **Outliers or Anomalies**| Data points that are significantly different from the norm, potentially due to input errors or exceptional cases.      |
| **Noise**                | Irrelevant or meaningless data, such as extraneous characters or unintended values.                                   |
| **Unstructured Data**    | Data that is not organized in a predefined manner, such as free-text fields or social media posts.                    |
| **Hidden or Dark Data**  | Data that is collected but not used or analyzed, often because it is difficult to access or integrate.                |
| **Data Bias**            | Systematic errors or patterns in data that distort results, often caused by biased data collection or selection.      |


## Steps to Better Quality Data
Sometimes it’s obvious where the issue is coming from - it’s always been around, and someone knows how to fix it temporarily to get a report out in time. Sound familiar!? But to start fixing things, you have to ask a number of questions. That's where dsicovery comes in.

### Discovery

+ What are the data quality issues?
+ Where are the data quality issues arising?
+ Is it at the source, before it enters your main database, data warehouse, or data lake?
+ Is it happening during the ETL process, when data is added to the database?
+ Is it a problem that is manifesting itself during the analysis phase or when it is published in the report or dashboard?
+ Most importantly, do we have a data owner that can help?

Understanding the lineage of your data will help to fix these problems. Where the data comes from, how it is transformed into new data points, what calculations are done, and how that is presented in reports or dashboards. Normally, many aspects of definition (see below) are already in place; however, more than likely, it will be incomplete.

If you can't show the lineage of the data, then how can you trust the data?

### Defining Your Data

This includes:

1. Data Catalogue
2. Data Structure
3. Data Lineage
4. Data Classification
5. Data Ownership

Defining your data will go a long way to making sure you can tackle data quality issues quickly and efficiently. But most importantly, identifying who owns that data can go a long way to solving problems quickly. If you can't identify an owner, can you assign an owner that you can work with? The problems in quality may be technical, human, governance-related, and due to a lack of operational systems that allow for problems to creep in.

> “Without clean data, or clean enough data, your data science is worthless.” — Michael Stonebraker

To bring it all together you need data management and operational and technological systems in place to reduce and eliminate data quality issues.

### Data Management

- **Data Integration**:
  - Seamless integration from various sources.
  - Use ETL processes for cleaning, transforming, and loading data.

- **Data Quality Management**:
  - Implement data validation rules.
  - Regularly monitor and cleanse data.

- **Data Security and Privacy**:
  - Encrypt data in transit and at rest.
  - Implement access controls.

- **Data Governance**:
  - Establish clear policies and procedures.
  - Define roles and responsibilities.

- **Data Documentation**:
  - Maintain comprehensive documentation.
  - Use a data catalog for metadata.
  - Data lineage

- **Data Delivery Mechanisms**:
  - Use APIs, data feeds, or pipelines.
  - Ensure timely data delivery.

- **Data Visualization and Reporting**:
  - Use visualization tools for dashboards and reports.
  - Ensure reports are accurate and up-to-date.

- **User Training and Support**:
  - Provide training on data access and use.
  - Offer ongoing support for data-related issues.

- **Data Owners and Data Champions**:
  - Identify data owners to support data management.
  - Identify data champions who understand data and the benefits of quality data.

  I don't talk about technical solutions here as data quality issues are rearly about technology and software. Those problems are solved easily. It's all the other problems that require discovery, defenition and management.


<div class="thoughts-box">
  <i class="material-icons">psychology</i>
  <div class="thoughts-content">
    <h4>Thoughts</h4>
    <ul class="thoughts-list">
      <li><i class="material-icons">lightbulb</i>Data Lineage is important in tracking data quility issues. Cloud services such as Snowflake and Azure provide a suite of tools that can help.</li>
      <li><i class="material-icons">lightbulb</i>Data Governance along with Data Management can help to catch and define the data quality issues.</li>
      <li><i class="material-icons">lightbulb</i>Working with people to delivery better data is fundamental. Especially with large date sets. Not everything can or should be automated, it's important to work with people who understand the data and how that data can be leveregd for business outcomes.</li>
      </ul>
  </div>
</div>