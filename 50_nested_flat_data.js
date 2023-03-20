/*
Expected:

New York
-Manhattan
San Francisco Bay Area
-San Francisco
-South Bay
--San Jose

*/

data = [
    {"id": 1, "name": "San Francisco Bay Area", "parent_id": null},
    {"id": 2, "name": "San Jose", "parent_id": 3},
    {"id": 3, "name": "South Bay", "parent_id": 1},
    {"id": 4, "name": "San Francisco", "parent_id": 1},
    {"id": 5, "name": "Manhattan", "parent_id": 6},
    {"id": 6, "name": "New York", "parent_id": null,},
    {"id": 7, "name": "sunnyvale", "parent_id": 2,}
];

/*
Our plan will be to move the children under their parents 
(into a new array-valued children property), and then 
filter them out.
*/

const nested = data.filter((element, index, arr) => {
    const parent = arr.find(e => e.id === element.parent_id);
    if (!parent) return true;
    (parent.children = parent.children || []).push(element);
});

let echo = (list, prefix) => {
    if (!prefix) prefix = '';
    if (!list) return;
    list.map((item) => {
        console.log(prefix + item.name);
        echo(item.children, prefix + '-');
    });
};

echo(nested);
