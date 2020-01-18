/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */

function merge( obj1, obj2 ){
	var obj3 = {};
	var attrname;
	for (attrname in obj1) { obj3[attrname] = obj1[attrname]; }
	for (attrname in obj2) { obj3[attrname] = obj2[attrname]; }
	return obj3;
}

module.exports = {
	merge: merge
};
