import { openBlock, createBlock, renderSlot } from 'vue';

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
  return (openBlock(), createBlock("button", {
    class: "kkb-button",
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick(...args)))
  }, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "src/Button/Button.vue";

var index = { Button: script };

export default index;
//# sourceMappingURL=bundle.esm.js.map
