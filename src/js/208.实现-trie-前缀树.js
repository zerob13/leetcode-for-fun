/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = { val: "", end: false };
  this.root.children = [];
  for (let i = 0; i < 26; i++) {
    this.root.children[i] = null;
  }
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;
  let idx = 0;
  while (idx < word.length) {
    let t = word.charCodeAt(idx) - 97;
    if (!cur.children[t]) {
      cur.children[t] = {
        val: word[idx],
        end: false,
        children: [],
      };
      for (let i = 0; i < 26; i++) {
        cur.children[t].children[i] = null;
      }
    }
    cur = cur.children[t];
    idx++;
    if (idx == word.length) {
      cur.end = true;
    }
  }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;
  let idx = 0;
  while (idx < word.length) {
    let t = word.charCodeAt(idx) - 97;
    if (!cur.children[t]) {
      return false;
    }
    cur = cur.children[t];
    idx++;
  }
  if (!cur.end) {
    return false;
  }
  return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;
  let idx = 0;
  while (idx < prefix.length) {
    let t = prefix.charCodeAt(idx) - 97;
    if (!cur.children[t]) {
      return false;
    }
    cur = cur.children[t];
    idx++;
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
