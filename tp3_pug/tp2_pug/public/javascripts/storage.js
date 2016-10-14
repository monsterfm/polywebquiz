/**
 * Feature detect + local reference for simple use of local storage
 * if (storage) {
 *    storage.setItem('key', 'value');
 *    storage.getItem('key');
 * }
 *
 */
var storage;
var fail;
var uid;
try {
  uid = new Date;
  (storage = window.localStorage).setItem(uid, uid);
  fail = storage.getItem(uid) != uid;
  storage.removeItem(uid);
  fail && (storage = false);
} catch (exception) {}
/* end  Feature detect + local reference */