import { toRefs, inject, computed, unref, getCurrentInstance, openBlock, createBlock, createCommentVNode, renderSlot, onMounted } from 'vue';

var script = {
  name: "ElButton",
  props: {
    type: {
      type: String,
      "default": "default"
    },
    size: {
      type: String,
      "default": ""
    },
    icon: {
      type: String,
      "default": ""
    },
    nativeType: {
      type: String,
      "default": "button"
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  emits: ["click"],
  setup: function setup(props, ctx) {
    var _toRefs = toRefs(props),
        size = _toRefs.size,
        disabled = _toRefs.disabled;

    var buttonSize = useButtonSize(size);
    var buttonDisabled = useButtonDisabled(disabled);

    var handleClick = function handleClick(evt) {
      ctx.emit("click", evt);
    };

    return {
      handleClick: handleClick,
      buttonSize: buttonSize,
      buttonDisabled: buttonDisabled
    };
  }
};

var useButtonSize = function useButtonSize(size) {
  var elFormItem = inject("elFormItem", {});

  var _elFormItemSize = computed(function () {
    return unref(elFormItem.elFormItemSize);
  });

  var buttonSize = computed(function () {
    return size.value || _elFormItemSize.value || (getCurrentInstance().proxy.$ELEMENT || {}).size;
  });
  return buttonSize;
};

var useButtonDisabled = function useButtonDisabled(disabled) {
  var elForm = inject("elForm", {});
  var buttonDisabled = computed(function () {
    return disabled.value || unref(elForm.disabled);
  });
  return buttonDisabled;
};

const _hoisted_1 = {
  key: 0,
  class: "el-icon-loading"
};
const _hoisted_2 = { key: 2 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    class: ["el-button", [
      _ctx.type ? 'el-button--' + _ctx.type : '',
      _ctx.buttonSize ? 'el-button--' + _ctx.buttonSize : '',
      {
        'is-disabled': _ctx.buttonDisabled,
        'is-loading': _ctx.loading,
        'is-plain': _ctx.plain,
        'is-round': _ctx.round,
        'is-circle': _ctx.circle,
      },
    ]],
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick(...args))),
    disabled: _ctx.buttonDisabled || _ctx.loading,
    autofocus: _ctx.autofocus,
    type: _ctx.nativeType
  }, [
    (_ctx.loading)
      ? (openBlock(), createBlock("i", _hoisted_1))
      : createCommentVNode("v-if", true),
    (_ctx.icon && !_ctx.loading)
      ? (openBlock(), createBlock("i", {
          key: 1,
          class: _ctx.icon
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createBlock("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, ["disabled", "autofocus", "type"]))
}

script.render = render;
script.__file = "src/Button/Button.vue";

var script$1 = {
  setup: function setup() {
    onMounted(function () {
      console.log("rect is mounted");
    });
  }
};

const _hoisted_1$1 = { class: "kkb-rect" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$1, "rect"))
}

script$1.render = render$1;
script$1.__file = "src/Rect/Rect.vue";

export { script as Button, script$1 as Rect };
