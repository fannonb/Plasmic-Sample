// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9vShP3riUJUok175BFrt6K
// Component: fvH5HraLt2JvHk
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: figTdjOb9OIT5I/component
import Divider from "../../Divider"; // plasmic-import: CG-gRJxaoA-X1q/component
import TextInput from "../../TextInput"; // plasmic-import: y3nQZFbfY6qbTP/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: 9vShP3riUJUok175BFrt6K/projectcss
import sty from "./PlasmicSignUpPrompt.module.css"; // plasmic-import: fvH5HraLt2JvHk/css
import GoogleIcon from "./icons/PlasmicIcon__Google"; // plasmic-import: CDnahQFVAFqGji/icon
import WandIcon from "./icons/PlasmicIcon__Wand"; // plasmic-import: qqjrpysCQkj3cp/icon

export const PlasmicSignUpPrompt__VariantProps = new Array();

export const PlasmicSignUpPrompt__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSignUpPrompt__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined
      },
      {
        path: "textInput3.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__yuSkg)}>
        <p.Stack
          as={"form"}
          data-plasmic-name={"form"}
          data-plasmic-override={overrides.form}
          hasGap={true}
          className={classNames(projectcss.all, sty.form)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__mtx2U
            )}
          >
            {"Sign up with"}
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__cl6Bi)}
          >
            <Button
              className={classNames("__wab_instance", sty.button___1DspI)}
              outline={true}
              showStartIcon={true}
            >
              {"Apple"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__siEq5)}
              outline={true}
              showStartIcon={true}
              startIcon={
                <GoogleIcon
                  className={classNames(projectcss.all, sty.svg__luL4)}
                  role={"img"}
                />
              }
            >
              {"Google"}
            </Button>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__mJLw0)}
          >
            <Divider
              className={classNames("__wab_instance", sty.divider__moqGo)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jNUuS
              )}
            >
              {"Or"}
            </div>

            <Divider
              className={classNames("__wab_instance", sty.divider__au7S0)}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__xHjjn)}
          >
            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              onChange={(...args) => {
                p.generateStateOnChangeProp($state, ["textInput", "value"])(
                  (e => e.target?.value).apply(null, args)
                );
              }}
              placeholder={"Full Name"}
              value={p.generateStateValueProp($state, ["textInput", "value"])}
            />

            <TextInput
              data-plasmic-name={"textInput2"}
              data-plasmic-override={overrides.textInput2}
              className={classNames("__wab_instance", sty.textInput2)}
              onChange={(...args) => {
                p.generateStateOnChangeProp($state, ["textInput2", "value"])(
                  (e => e.target?.value).apply(null, args)
                );
              }}
              placeholder={"Email"}
              value={p.generateStateValueProp($state, ["textInput2", "value"])}
            />

            <TextInput
              data-plasmic-name={"textInput3"}
              data-plasmic-override={overrides.textInput3}
              className={classNames("__wab_instance", sty.textInput3)}
              onChange={(...args) => {
                p.generateStateOnChangeProp($state, ["textInput3", "value"])(
                  (e => e.target?.value).apply(null, args)
                );
              }}
              placeholder={"Password"}
              value={p.generateStateValueProp($state, ["textInput3", "value"])}
            />
          </p.Stack>

          <Button
            className={classNames("__wab_instance", sty.button__saHi1)}
            color={"indigo"}
            endIcon={
              <WandIcon
                className={classNames(projectcss.all, sty.svg__ikGce)}
                role={"img"}
              />
            }
          >
            {"Start your account"}
          </Button>
        </p.Stack>

        <Divider className={classNames("__wab_instance", sty.divider__vxiUb)} />

        <div className={classNames(projectcss.all, sty.freeBox__m214C)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___5Ftpk
            )}
          >
            {
              "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
            }
          </div>
        </div>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "form", "textInput", "textInput2", "textInput3"],
  form: ["form", "textInput", "textInput2", "textInput3"],
  textInput: ["textInput"],
  textInput2: ["textInput2"],
  textInput3: ["textInput3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSignUpPrompt__ArgProps,
          internalVariantPropNames: PlasmicSignUpPrompt__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSignUpPrompt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUpPrompt";
  } else {
    func.displayName = `PlasmicSignUpPrompt.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUpPrompt = Object.assign(
  // Top-level PlasmicSignUpPrompt renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    textInput: makeNodeComponent("textInput"),
    textInput2: makeNodeComponent("textInput2"),
    textInput3: makeNodeComponent("textInput3"),
    // Metadata about props expected for PlasmicSignUpPrompt
    internalVariantProps: PlasmicSignUpPrompt__VariantProps,
    internalArgProps: PlasmicSignUpPrompt__ArgProps
  }
);

export default PlasmicSignUpPrompt;
/* prettier-ignore-end */
