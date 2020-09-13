const AccessControl = require('accesscontrol')
const grantList = [
  // manager role for posts
  { role: 'manager', resource: 'post', action: 'create:own', attributes: '*, !views' },
  { role: 'manager', resource: 'post', action: 'update:own', attributes: '*, !views' },
  { role: 'manager', resource: 'post', action: 'delete:own', attributes: '*' },
  { role: 'manager', resource: 'post', action: 'read:any', attributes: '*' },

  // admin role for posts
  { role: 'admin', resource: 'post', action: 'create:any', attributes: '*, !views' },
  { role: 'admin', resource: 'post', action: 'update:any', attributes: '*, !views' },
  { role: 'admin', resource: 'post', action: 'delete:any', attributes: '*' },
  { role: 'admin', resource: 'post', action: 'read:any', attributes: '*' }
]

const ac = new AccessControl(grantList)

module.exports = ac
