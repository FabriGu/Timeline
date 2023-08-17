// // import * as vis from '~/Desktop/Timeline/node_modules/vis-timeline/dist/vis-timeline-graph2d.min.js'

// function VisTimeline() {
//   var items = [
//     { x: "2014-06-13", y: 30, group: 0 },
//     { x: "2014-06-14", y: 10, group: 0 },
//     { x: "2014-06-15", y: 15, group: 1 },
//     { x: "2014-06-16", y: 30, group: 1 },
//     { x: "2014-06-17", y: 10, group: 1 },
//     { x: "2014-06-18", y: 15, group: 1 },
//   ];

//   var options = {
//     width: "100%",
//     height: "400px",
//     style: "surface",
//   };

//   var now = Date.now();
//   var itemCount = 60;

//   // create a data set with groups
//   var groups = new vis.DataSet();

//   groups.add([
//     {
//       id: 1,
//       content: "Lee",
//       nestedGroups: [11, 12, 13],
//     },
//     {
//       id: 2,
//       content: "invisible group",
//       visible: false,
//     },
//     {
//       id: 3,
//       content: "John",
//       nestedGroups: [14],
//       showNested: false,
//     },
//     {
//       id: 4,
//       content: "Alson",
//     },
//   ]);

//   groups.add([
//     {
//       id: 11,
//       content: "cook",
//     },
//     {
//       id: 12,
//       content: "shop",
//     },
//     {
//       id: 13,
//       content: "clean house",
//     },
//     {
//       id: 14,
//       content: "wash dishes",
//     },
//   ]);

//   // create a dataset with items
//   var items = new vis.DataSet();
//   var groupIds = groups.getIds();
//   var types = ["box", "point", "range", "background"];
//   for (var i = 0; i < itemCount; i++) {
//     var start = now.clone().add(Math.random() * 200, "hours");
//     var end = start.clone().add(2, "hours");
//     var randomGroupId = groupIds[Math.floor(Math.random() * groupIds.length)];
//     var type = types[Math.floor(4 * Math.random())];

//     items.add({
//       id: i,
//       group: randomGroupId,
//       content: "item " + i,
//       start: start,
//       end: end,
//       type: type,
//     });
//   }

//   // create visualization
//   var container = document.getElementById("visualization");
//   var options = {
//     groupOrder: "content", // groupOrder can be a property name or a sorting function
//   };

//   var timeline = new vis.Timeline(container, items, groups, options);
// }

// export default VisTimeline;
