import { Module } from './modules/module';
import { VNode } from './vnode';
import { DOMAPI } from './htmldomapi';
export { h } from './h';
export { thunk } from './thunk';
export declare function init(modules: Array<Partial<Module>>, domApi?: DOMAPI): (oldVnode: VNode | Element, vnode: VNode) => VNode;
