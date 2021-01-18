/**** task 4 ****/

const printTriangle = (n) => {
    let i = 0, str = '', item = '# ', result = '';

    for (let i = 1; i <= n; i += 1) {
        let j = i;
        while (j < n) {
            str = str + ' ';  
            j++;
        } 
        result += str;        
        for (let h = 1; h <= i; h += 1) {
            result += item;
        }            
            console.log(result);
            str = '';
            result = '';
    }    
}
printTriangle(5);


/**** task 5 ****/

let arr = new Array(5);

function fillArray(arr) {
	for (let i = 0; i < arr.length; i += 1) {
		arr[i] = Math.floor(Math.random() * (100 - (-100))) + (-100);
	}
	return arr;
}
const f1 = fillArray(arr);
console.log(f1);

function replaceFromArray(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] < 0) {
			newArr.push(0);
			continue;
		}
		newArr.push(arr[i]);
	}
	return newArr;
}
const f2 = replaceFromArray(arr);
console.log(f2);


function addToArray(f2) {	
	let arrCopy = [];

		for (let i = 0; i < f2.length; i += 1) {
			arrCopy.push(f2[i]);

			if ((f2[i] === 0) && (i % 2 === 0)) {
			arrCopy.push(-1);
			}
	}
	return arrCopy;
}
const f3 = addToArray(f2);
console.log(f3);



/**** task 6 ****/

const sortCollection = (arr) => {
	let resultCollection = [];

	for (let i = 0; i < arr.length; i += 1) {
		let resultCollectionItem = {};

		resultCollectionItem.id = arr[i].user.id;
		resultCollectionItem.name = arr[i].user.name;
		resultCollectionItem.posts = [];
		let post = {};
		post.id = arr[i].id;
		post.title = arr[i].title;
		post.text = arr[i].text;
		resultCollectionItem.posts.push(post);

		resultCollection.push(resultCollectionItem);
	}
	console.log(resultCollection);
	return resultCollection;
}

var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]

sortCollection(model);