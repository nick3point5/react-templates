import { state } from "./state";
import {
	createStateHook,
	createActionsHook,
	createEffectsHook,
	createReactionHook,
} from "overmind-react";
import * as actions from "./actions";

export const config = {
	state,
	actions,
	devtools: "10.0.0.1:3031",
};

export const useAppState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook();
