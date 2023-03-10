// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9vShP3riUJUok175BFrt6K
// Component: h9rOBTxAG8o6jb
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Divider from "../../Divider"; // plasmic-import: CG-gRJxaoA-X1q/component
import ValueProp from "../../ValueProp"; // plasmic-import: 17XITOzK4mT8JI/component
import Button from "../../Button"; // plasmic-import: figTdjOb9OIT5I/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: 9vShP3riUJUok175BFrt6K/projectcss
import sty from "./PlasmicPriceCard.module.css"; // plasmic-import: h9rOBTxAG8o6jb/css
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: reA-9LLvqgPhh5/icon

export const PlasmicPriceCard__VariantProps = new Array("primary", "borders");

export const PlasmicPriceCard__ArgProps = new Array(
  "label",
  "dollars",
  "description",
  "action"
);

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicPriceCard__RenderFunc(props) {
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
        path: "primary",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.primary
          : undefined
      },
      {
        path: "borders",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.borders
          : undefined
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootborders_flatLeft]: hasVariant($state, "borders", "flatLeft"),
          [sty.rootborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),

          [sty.rootprimary]: hasVariant($state, "primary", "primary")
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__sgOtz)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__uN1Yc)}>
          <div className={classNames(projectcss.all, sty.freeBox___84Hfn)}>
            {p.renderPlasmicSlot({
              defaultContents: "Starter",
              value: args.label,
              className: classNames(sty.slotTargetLabel)
            })}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__sutSk)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__gJ8Z1)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vco75
              )}
            >
              {"$"}
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__osVS)}>
              {p.renderPlasmicSlot({
                defaultContents: "8",
                value: args.dollars,
                className: classNames(sty.slotTargetDollars)
              })}
            </div>
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__uBwsU
            )}
          >
            {"/month"}
          </div>
        </p.Stack>
      </p.Stack>

      <Divider
        data-plasmic-name={"divider"}
        data-plasmic-override={overrides.divider}
        className={classNames("__wab_instance", sty.divider)}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__bzty4)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__olqi7)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <ValueProp
                  className={classNames(
                    "__wab_instance",
                    sty.valueProp___2LH3W
                  )}
                  description={
                    "Vestibulum mollis odio dictum ultrices facilisis molestie vestibulum"
                  }
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__dn2HN)}
                      role={"img"}
                    />
                  }
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__psxcS)}
                  description={"Mus consequat a justo"}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__gKTo)}
                      role={"img"}
                    />
                  }
                />
              </React.Fragment>
            ),

            value: args.description
          })}
        </p.Stack>

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          color={hasVariant($state, "primary", "primary") ? "green" : "white"}
          extraSmallShadow={true}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ucgZ
                )}
              >
                {"Buy starter"}
              </div>
            ),

            value: args.action
          })}
        </Button>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "divider", "button"],
  divider: ["divider"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPriceCard__ArgProps,
          internalVariantPropNames: PlasmicPriceCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    divider: makeNodeComponent("divider"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */
