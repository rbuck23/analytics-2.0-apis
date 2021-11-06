(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2801],{9468:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return s}});var t=a(2122),m=a(9756),i=(a(5007),a(4983)),o=a(9536),l=["components"],d={},p={_frontmatter:d},r=o.Z;function s(e){var n=e.components,a=(0,m.Z)(e,l);return(0,i.mdx)(r,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"tags-api"},"Tags API"),(0,i.mdx)("p",null,"The Analytics 2.0 Tags APIs allow you to retrieve, update, or create tags and their association with components programmatically through Adobe I/O. The APIs use the same data and methods that are used when working with tags in the UI. See ",(0,i.mdx)("a",{parentName:"p",href:"examples.md"},"examples")," for example API calls that you can make to each endpoint."),(0,i.mdx)("h2",{id:"retrieve-multiple-tags"},"Retrieve multiple tags"),(0,i.mdx)("p",null,"Retrieve a list of tags for the organization."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags")),(0,i.mdx)("p",null,"You can paginate results by using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"limit")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"page")," query strings."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"limit")),": An integer that represents the number of results per page."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"page")),": An integer that represents which page to return results.")),(0,i.mdx)("h2",{id:"retrieve-a-single-tag"},"Retrieve a single tag"),(0,i.mdx)("p",null,"Retrieves information around the specified tag ID."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/{ID}")),(0,i.mdx)("h2",{id:"retrieve-a-list-of-components-by-tag"},"Retrieve a list of components by tag"),(0,i.mdx)("p",null,"Retrieve all components of specific type associated with tag names."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/tagnames?tagNames={TAGNAMES}")),(0,i.mdx)("p",null,"This API call requires the ",(0,i.mdx)("inlineCode",{parentName:"p"},"tagNames")," query string. Query string values include a comma-separated list of tag names to search."),(0,i.mdx)("h2",{id:"retrieve-all-tags-for-one-or-more-components"},"Retrieve all tags for one or more components"),(0,i.mdx)("p",null,"Retrieve a list of tags tied to one or more components."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/search?componentId={ID}&componentType={TYPE}")),(0,i.mdx)("p",null,"This API call requires two query string parameters:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"componentId")),": The ID of the component(s). Separate multiple ID's with a comma."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"componentType")),": The type of the component. Valid component types include:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"segment")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dashboard")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"bookmark")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"calculatedMetric")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"project")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dateRange")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metric")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dimension")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"virtualReportSuite")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"scheduledJob")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"alert")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"classificationSet"))))),(0,i.mdx)("h2",{id:"update-tags-for-multiple-components"},"Update tags for multiple components"),(0,i.mdx)("p",null,"Updates one or more tags with desired values."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"POST https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/component/search")),(0,i.mdx)("p",null,"This API call requires a JSON request body to determine how to update each component. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "componentType": "project",\n  "componentIds": [\n    "component-id-556"\n  ]\n}\n')),(0,i.mdx)("h2",{id:"create-a-tag"},"Create a tag"),(0,i.mdx)("p",null,"Creates tags for use with components."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"POST https://analytics.adobe.io/api/{COMPANY_ID}/componentmetadata/tags")),(0,i.mdx)("p",null,"This API call requires a JSON request body so it can create the desired tag. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "name":"Tag name",\n      "description":"Description",\n      "components":[\n         {\n            "componentType":"project",\n            "componentId":"component-id-1"\n         }\n      ]\n   }\n]\n')),(0,i.mdx)("h2",{id:"delete-a-tag"},"Delete a tag"),(0,i.mdx)("p",null,"Deletes a tag. It also untags all components associated with the tag."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"DELETE https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/{TAG_ID}")),(0,i.mdx)("h2",{id:"remove-all-tags-from-components"},"Remove all tags from component(s)"),(0,i.mdx)("p",null,"Removes all tags from list of components."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"DELETE https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags?componentId={ID}&componentType={TYPE}")),(0,i.mdx)("p",null,"This API call requires two query string parameters:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"componentId")),": The ID of the component(s). Separate multiple ID's with a comma."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"componentType")),": The type of the component. Valid component types include:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"segment")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dashboard")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"bookmark")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"calculatedMetric")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"project")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dateRange")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metric")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dimension")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"virtualReportSuite")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"scheduledJob")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"alert")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"classificationSet"))))),(0,i.mdx)("h2",{id:"overwrite-tags-for-components"},"Overwrite tags for components"),(0,i.mdx)("p",null,"Set the tags for one or more components. This endpoint overwrites all existing tags for the component, meaning that existing tags are removed."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"PUT https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/tagitems")),(0,i.mdx)("p",null,"This API call requires a JSON request body that contains the components to update and the tags to set. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "componentType":"project",\n      "componentId":"component-id-1",\n      "tags":[\n         {\n            "name":"marketing-1",\n            "description":"marketing 1"\n         },\n         {\n            "name":"marketing-2",\n            "description":"marketing 2"\n         }\n      ]\n   }\n]\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-componentmetadata-tags-index-md-4c18d6ea94833bd9dea5.js.map