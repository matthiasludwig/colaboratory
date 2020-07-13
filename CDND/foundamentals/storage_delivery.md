# Storage & Content Delivery

* Collect
* Store
* Analyze
of Data

**Advantages of the Cloud:**

* Durability - Will be available in the future
* Availability - How data can be accesed
* Scalability - Adding or removing ressources to maintain steady and fast response (Vertical, Horizontal, Diagonal)

## S3 - Simple Storage System

* Static Websites
* Content Delivery
* Hybrid Cloud Storage
* ...

## DynamoDB

NoSQL Database:
DynamoDB is a NoSQL document database service that is fully managed. Unlike traditional databases, NoSQL databases, are schema-less. Schema-less simply means that the database doesn't contain a fixed (or rigid) data structure.

Each row is called a "document".
Provisioning or managing servers is done by AWS. As well as patching/updating.

## RDS - Relational Databases

* Postgres, MySQL, ...
* RDS assists with database administrative tasks that include upgrades, patching, installs, backups, monitoring, performance checks, security, etc.

## Content Delivery in the Cloud (CDN)

* low latency
* decreased server load
* better user experience

Amazon Cloudfront can be used as a delivery system:

* CloudFront is found under the Networking & Content Delivery section on the AWS Management Console.
* Amazon countinously adds new Edge Locations.
* CloudFront ensures that end-user requests are served from the closest edge location.
* CloudFront works with non-AWS origin sources.
* You can use GeoIP blocking to serve content (or not serve content) to specific countries.
* Cache control headers determine how frequently CloudFront needs to check the origin for an updated version your file.
* The maximum size of a single file that can be delivered through Amazon CloudFront is 20 GB.
