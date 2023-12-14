const {add, subtract, nuller, createObject} = require("./app");

test('adds 1 + 2 to equal 3', () => {
    expect(add(2, 1)).toBe(3)
})

test('creates an object that represents the user Luke Jones', () => {
    const luke = {
        name: "Luke",
        age: 29
    }
    expect(createObject(luke)).toEqual({
        name: "Luke",
        age: 29
    })
})

test('value is null?', ()=>{
    expect(nuller("luke")).not.toBeNull();
    // expect(nuller("luke")).not.toBeUndefined();
})
