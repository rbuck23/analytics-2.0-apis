(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9762],{94693:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return d}});var i=a(22122),o=a(19756),n=(a(15007),a(64983)),s=a(99536),r=["components"],l={},m={_frontmatter:l},u=s.Z;function d(e){var t=e.components,a=(0,o.Z)(e,r);return(0,n.mdx)(u,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"bulk-data-insertion-api"},"Bulk Data Insertion API"),(0,n.mdx)("p",null,"The Bulk Data Insertion API (BDIA) is an Adobe Analytics capability that lets you upload server call data in batches of files instead of using client-side libraries such as AppMeasurement. The server calls in these batch files can be either current (live) data or historical data. It is a more scalable successor to the Data Insertion API in previous Adobe Analytics API versions."),(0,n.mdx)("p",null,"Bulk Data Insertion solves several problems for a variety of use cases. Some use case examples include:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Ingesting historical data from a previous analytics system"),(0,n.mdx)("li",{parentName:"ul"},"An internal analytics collection system that makes it unfeasible to use AppMeasurement. You can use Extract-Transform-Load (ETL) processes to put data into batch files then use BDIA to upload them to Adobe Analytics."),(0,n.mdx)("li",{parentName:"ul"},"Data collection from devices that have only intermittent connectivity to the internet. These devices store up the interactions until they receive a connection. The device can then upload the data all at once via BDIA.")),(0,n.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.mdx)("p",null,"Before using the BDIA, make sure that all of the following are met:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"You successfully authenticate with the API using JWT. OAuth is not supported. See ",(0,n.mdx)("a",{parentName:"li",href:"../../index.md"},"Getting started")," to make sure that you have the correct permissions, create an API client on Adobe I/O, and that you successfully authenticate."),(0,n.mdx)("li",{parentName:"ul"},"The desired report suite is timestamp-enabled or timestamp optional. See ",(0,n.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/analytics/technotes/timestamps-optional.html"},"Timestamps optional")," in the Adobe Analytics documentation. All newly created report suites are set to timestamp optional by default."),(0,n.mdx)("li",{parentName:"ul"},"Communicate to Adobe the expected volume of ingestion per day. Based on this information, Adobe provisions the appropriate hardware to handle that volume and creates a per-second throttle limit. If enough files are uploaded in a short amount of time to exceed the throttle limit, Adobe ingests uploaded files more slowly. These limits help ensure timely processing and availability of data for reporting. They also help protect the system from becoming overwhelmed before proper capacity is provisioned for a sharp increase in file uploads."),(0,n.mdx)("li",{parentName:"ul"},"Follow the established ",(0,n.mdx)("a",{parentName:"li",href:"file-formatting.md"},"File formatting requirements")," for each upload."),(0,n.mdx)("li",{parentName:"ul"},"If using Experience Cloud IDs to identify visitors, provisioning by Adobe is required. See ",(0,n.mdx)("a",{parentName:"li",href:"customer-id.md"},"Customer ID and Experience Cloud Visitor ID seeds")," for more information."),(0,n.mdx)("li",{parentName:"ul"},"If uploading more than one file at a time, use the correct number of ",(0,n.mdx)("a",{parentName:"li",href:"visitor-groups.md"},"Visitor Groups"),". Follow the guidelines on file send frequency limits to avoid data processing out of order.")),(0,n.mdx)("p",null,"Once you meet all prerequisites, see ",(0,n.mdx)("a",{parentName:"p",href:"file-format.md"},"File format")," to prepare your data in a format usable by the API."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-bulk-data-insertion-index-md-bdc69709dd9829d7e7d3.js.map