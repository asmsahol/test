const addToDb = item => {
    const db = getDb();
    if(item in db){
        db[item] = db[item] + 1;
    }
    else{
        db[item] = 1;
    }
    saveTOdb(db);
};

const removeFromDb = item => {
    const db = getDb();
    delete db[item];
    saveTOdb(db);
};

const saveTOdb = db => {
    const dbJson = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJson);
};

const getDb = () => {
    const db = localStorage.getItem('shopping-cart');
    const dbJson = JSON.parse(db);
    return dbJson;
};