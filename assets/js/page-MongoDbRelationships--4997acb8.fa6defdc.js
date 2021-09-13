(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{496:function(e,t,a){"use strict";a.r(t);var o=a(2),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb-relationships"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-relationships"}},[e._v("#")]),e._v(" MongoDb Relationships")]),e._v(" "),a("h2",{attrs:{id:"what-are-the-three-types-of-relationships"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-three-types-of-relationships"}},[e._v("#")]),e._v(" What are the three types of relationships?")]),e._v(" "),a("p",[e._v("One-to-one: Relationship between two entities. For example: Customer and Address. Each customer has one address and each address has one customer. Embedding is preferred in a one-to-one relationship.")]),e._v(" "),a("p",[e._v("One-to-many: One entity has multiple relationships while the other can one be tied back to one of the former entity. For example, Make and Model of cars. The make can have multiple models but, the models only have one make. Bucketing is preferred for large amounts of data and where pagination is important. But, Linking and Embedding are still useful in smaller cases or when pagination is not important.")]),e._v(" "),a("p",[e._v("Many-to-many: Two entities can have multiple relationships between each other. For example, a book could have many authors and authors can write multiple books.")]),e._v(" "),a("h2",{attrs:{id:"what-are-the-benefits-of-the-traditional-linking-of-relationships-instead-of-embedding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-benefits-of-the-traditional-linking-of-relationships-instead-of-embedding"}},[e._v("#")]),e._v(" What are the benefits of the traditional linking of relationships instead of Embedding")]),e._v(" "),a("p",[e._v("Embedding has a maximum document size of 16mb. For larger datasets, linking avoids maxing out that storage. It is also easier to return paginated data.")]),e._v(" "),a("h2",{attrs:{id:"what-are-some-of-the-challenges-faced-when-deciding-how-to-manage-a-many-to-many-relationship-that-ultimately-drive-your-decision-on-how-to-create-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-some-of-the-challenges-faced-when-deciding-how-to-manage-a-many-to-many-relationship-that-ultimately-drive-your-decision-on-how-to-create-it"}},[e._v("#")]),e._v(" What are some of the challenges faced when deciding how to manage a many-to-many relationship that ultimately drive your decision on how to create it?")]),e._v(" "),a("p",[e._v("Say we have books and genre. We could embed genres directly into books because there aren't that many genres. However, we would not want to embed books into genres since there are many more books and they are always changing. If you know there are several relationships, the Third Collection design can be most efficient. It holds foreign keys which link the data together.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/amanda-rice/late-summer21-gregslist-node",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gregslist Node"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);