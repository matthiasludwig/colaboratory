# Infrastructure as Code

## Getting started with Cloud Formation

Having a combination of Development and Operations:

* Increase the speed of software delivery
* Increases the speed of software evolution
* Have better reliability of the software
* Have scalability using automation,
* Improved collaboration among teams.

**TODO: Add link to IAC Repository: [Link to Infrastructure-as-code Respository](https://github.com/...)

Deploy via the AWS-CLI:

```bash
aws cloudformation create-stack
--stack-name myfirsttest
--region us-west-2
--template-body file://testcfn.yml
```
