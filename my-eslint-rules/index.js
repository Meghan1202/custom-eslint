module.exports = {
  rules: {
    "template-literal": {
      create: function (context) {
        return {
          Literal(node) {
            if(typeof(node.value) === 'string') {
              context.report(node, `Use template literals`);
            }
          }
        }
      }
    }
  }
};