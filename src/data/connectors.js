export const connectors = [
  {
    name: "Snowflake",
    description:
      "A Delta table can be read by Snowflake using a manifest file, which is a text file containing the list of data files to read for querying a Delta table.",
    url: "https://docs.delta.io/latest/snowflake-integration.html",
    tags: ["Snowflake"],
    thumbnail: "/images/connectors/snowflake.png",
  },
  {
    name: "Redshift",
    description:
      "A Delta table can be read by Redshift Spectrum using a manifest file, which is a text file containing the list of data files to read for querying a Delta table.",
    url: "https://docs.delta.io/latest/redshift-spectrum-integration.html",
    tags: ["Redshift", "AWS"],
    thumbnail: "/images/connectors/redshift.png",
  },
  {
    name: "DBT",
    description:
      "This plugin ports dbt functionality to Spark. It supports running dbt against Spark clusters that are hosted via Databricks (AWS + Azure), Amazon EMR, or Docker. We have not tested extensively against older versions of Apache Spark. The plugin uses syntax that requires version 2.2.0 or newer. Some features require Spark 3.0 and/or Delta Lake.",
    url: "https://github.com/fishtown-analytics/dbt-spark",
    tags: ["dbt"],
    thumbnail: "/images/connectors/dbt.jpg",
  },
  {
    name: "Delta Rust API",
    description:
      "An experimental interface to Delta Lake for Rust. This library provides low level access to Delta tables and is intended to be used with data processing frameworks like datafusion, ballista, rust-dataframe, vega, etc. It can also act as the basis for native bindings in other languages such as Python, Ruby or Golang. This project is still very early and only read operations are supported at the moment.",
    url: "https://github.com/delta-io/delta-rs",
    tags: ["Rust", "Python"],
    thumbnail: "/images/connectors/rust.png",
  },
  {
    name: "Airbyte (coming soon)",
    description:
      "Airbyte makes data integration made simple, secure, and extensible.  It is the new open-source standard to sync data from applications, APIs & databases to warehouses, lakes & other destinations.  Airbyte is planning to release support of data lakes, starting with Delta Lake, in the next few months.",
    url: "https://docs.airbyte.io/project-overview/roadmap",
    tags: ["Airbyte"],
    thumbnail: "/images/connectors/airbyte.png",
  },
  {
    name: "Presto",
    description:
      "Presto supports reading from external tables using a manifest file, which is a text file containing the list of data files to read for querying a table. When an external table is defined in the Hive metastore using manifest files, Presto can use the list of files in the manifest rather than finding the files by directory listing.",
    url: "https://docs.delta.io/latest/presto-integration.html",
    tags: ["Presto"],
    thumbnail: "/images/connectors/presto.png",
  },
  {
    name: "Athena",
    description:
      "Athena supports reading from external tables using a manifest file, which is a text file containing the list of data files to read for querying a table. When an external table is defined in the Hive metastore using manifest files, Athena can use the list of files in the manifest rather than finding the files by directory listing.",
    url: "https://docs.delta.io/latest/presto-integration.html",
    tags: ["Athena", "AWS"],
    thumbnail: "/images/connectors/athena.png",
  },
  {
    name: "PowerBI Delta Connector",
    description:
      "Reading Delta Lake tables natively in PowerBI The provided PowerQuery/M function allows you to read a Delta Lake table directly from any storage supported by PowerBI. Most common storage would be Azure Data Lake Store, Azure Blob Storage, or a local folder or file share.",
    url: "https://github.com/delta-io/connectors/tree/master/powerbi",
    tags: ["PowerBI"],
    thumbnail: "/images/connectors/powerbi.png",
  },
  {
    name: "Delta Standalone Reader",
    description:
      "Delta Standalone Reader is a JVM library to read Delta Lake tables. Unlike https://github.com/delta-io/delta, this project doesn't use Spark to read tables and it has only a few transitive dependencies. It can be used by any application that cannot use a Spark cluster.",
    url: "https://github.com/delta-io/connectors",
    tags: ["Scala", "JVM"],
    thumbnail: "/images/connectors/delta-standalone.png",
  },
  {
    name: "Hive Connector",
    description:
      "This project is a library to make Hive read Delta Lake tables. The project provides a uber JAR delta-hive-assembly_-0.2.0.jar to use in Hive. You can use either Scala 2.11 or 2.12. The released JARs are available in the releases page. Please download the uber JAR for the corresponding Scala version you would like to use. You can also use the following instructions to build it as well.",
    url: "https://github.com/delta-io/connectors",
    tags: ["Hive"],
    thumbnail: "/images/connectors/hive.png",
  },
  {
    name: "SQL Delta Import",
    description:
      "sql-delta-import is a utility for importing data from a JDBC source into a Delta Lake table.  This project is part of the delta.io/connectors repo.  For more information, refer to https://tech.scribd.com/blog/2021/introducing-sql-delta-import.html",
    url: "https://github.com/delta-io/connectors",
    tags: ["SQL", "JDBC"],
    thumbnail: "/images/connectors/sql.png",
  },
  {
    name: "Kafka Delta Ingest",
    description:
      "The kafka-delta-ingest project aims to build a highly efficient daemon for streaming data through Apache Kafka into Delta Lake. This project is currently highly experimental and evolving in tandem with the delta-rs bindings.",
    url: "https://github.com/delta-io/kafka-delta-ingest",
    tags: ["Kafka"],
    thumbnail: "/images/connectors/kafka.png",
  },
];
