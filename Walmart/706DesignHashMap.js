/**
 * Initialize your data structure here.
 */
 var MyHashMap = function() {
    this.hashMap = [];
};

/**
 * Inserts a (key, value) pair into the HashMap. If the key already exists, update the corresponding value.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.hashMap[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.hashMap[key] !== undefined ? this.hashMap[key] : -1;
};

/**
 * Removes the key and its corresponding value if the map contains the mapping for the key.
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.hashMap[key];
};
