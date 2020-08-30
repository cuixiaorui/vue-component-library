'use strict';

var vue = require('vue');

var script = {
  emits: ["click"],
  setup(_, { emit }) {
    const handleClick = () => {
      emit("click");
    };

    return {
      handleClick,
    };
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("button", {
    class: "kkb-button",
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick(...args)))
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "src/Button/Button.vue";

var index = { Button: script };

module.exports = index;
//# sourceMappingURL=bundle.js.map
