---
title: "From Chaos to Clarity: Managing Data Quality Effectively"
date: 2024-09-13T07:00:00
description: "Version: 1.0.0"
draft: false
labels: ""
slug: "data_quality"
images: ["data_quality.jpg"]
---

<img class="preview" src="../../images/data_quality.jpg" alt="Man fustreated with dirty data">

> According to <a href="https://www.experian.com/blogs/news/2021/02/25/highlights-2021-global-data-management-research" target="_blank">Experian's 2021 Global Data Management Research</a>, "Fifty-five percent of business leaders say they lack trust in their data assets, hindering their ability to be fully data-driven."

## What are Data Quality Issues?
Data quality issues range from basic problems like duplicate data, format issues, and invalid data to more complex challenges such as data bias, ambiguous data, and unstructured data. View a more comprehensive list of data issues <a href="#table-of-data-issues">here</a>.

## Steps to Better Quality Data
Sometimes it’s obvious where the issue is coming from - it’s always been around, and someone knows how to fix it temporarily to get a report out in time. Sound familiar? But to start fixing things, you have to ask a number of questions. I call it discovery! Discovery is about asking questions, the foundation of your strategy to clean dirty data.

### Discovery

+ What are the data quality issues?
+ Where are the data quality issues arising?
+ Is it at the source, before it enters your main database, data warehouse, or data lake?
+ Is it happening during the ETL process, when data is added to the database?
+ Is it a problem that is manifesting itself during the analysis phase or when it is published in the report or dashboard?
+ Most importantly, do we have a data owner that can help?

Understanding the lineage of your data will greatly help. Where the data comes from, how it is transformed into new data points, what calculations are done, and how that is presented in reports or dashboards. Normally, many aspects of definition (see below) are already in place; however, more than likely, it will be incomplete.

> "If you can't show the lineage of your data, how can you trust it?" - Puneet Thukral

Defining data is critical in cleaning bad data but also maintaining quality data. It's an important part of the strategy to maintain quality data sources to help drive data-decision making to achieve positive business outcomes.

### Defining Your Data

This includes:

1. Data Catalogue
2. Data Structure
3. Data Lineage
4. Data Classification
5. Data Ownership

Defining your data will go a long way in ensuring you can tackle data quality issues quickly and efficiently. But most importantly, identifying who owns the data is equally important. If you can’t identify an owner, can you assign one that you can work with? The problems in quality may be technical, human, governance-related, and/or due to a lack of operational systems that allow for issues to creep in.

> “Without clean data, or clean enough data, your data science is worthless.” — Michael Stonebraker

To bring it all together, you need data management and operational and technological systems in place to reduce and eliminate data quality issues. The list below is a good start in what is needed to bring everything together to deliver on your data quality strategy. Data Teams, Data Owners, and Data Champions are vital as they are the glue to make things work. People are at the heart of solving problems, implementing solutions, and delivering outcomes that align with business strategy.

### Data Management

- **Data Teams**:
    - Data Management
    - Data Teams

- **Data Owners and Data Champions**:
  - Identify data owners to support data management.
  - Identify data champions who understand data and the benefits of quality data.

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
  - KPIs and metrics

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

I don't talk about technical solutions to data quality issues here as each issue will be different, but having a clear strategy and systems in place will help to tackle the problems that present themselves. That's where discovery, definition, and management will form the basis of a data strategy that will help resolve data quality issues and provide the foundation for building data products that will give you insights.

## Summary

Data quality issues can range from basic problems like duplication and formatting errors to complex ones such as data bias and unstructured data. Tackling these challenges requires a strategic approach that begins with data discovery—identifying and understanding where the data quality issues arise, whether at the source or during the transformation and analysis phases. The next step is defining your data through a data catalog, structure, lineage, classification, and ownership to ensure clarity and accountability.

<div class="thoughts-box">
  <i class="material-icons">psychology</i>
  <div class="thoughts-content">
    <h4>Thoughts</h4>
    <ul class="thoughts-list">
      <!-- <li><i class="material-icons">lightbulb</i>Data Lineage is important in tracking data quility issues. Cloud services such as Snowflake and Azure provide a suite of tools that can help.</li>
      <li><i class="material-icons">lightbulb</i>Data Governance along with Data Management can help to catch and define the data quality issues.</li> -->
      <li><i class="material-icons">lightbulb</i>Working with people to deliver better data is essential, especially with big data. While automation has its place, human insight is irreplaceable. Work with those who understand your data to leverage impactful business outcomes.</li>
      </ul>
  </div>
</div>

## Refernces

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
