var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
var AppPreferences = /** @class */ (function (_super) {
    __extends(AppPreferences, _super);
    function AppPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppPreferences.prototype.fetch = function (dict, key) { return cordova(this, "fetch", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.store = function (dict, key, value) { return cordova(this, "store", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.remove = function (dict, key) { return cordova(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.clearAll = function () { return cordova(this, "clearAll", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.show = function () { return cordova(this, "show", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.watch = function (subscribe) { return cordova(this, "watch", { "observable": true }, arguments); };
    AppPreferences.prototype.suite = function (suiteName) { return cordova(this, "suite", { "platforms": ["Android"], "sync": true }, arguments); };
    AppPreferences.prototype.iosSuite = function (suiteName) { return cordova(this, "iosSuite", { "platforms": ["iOS"], "sync": true }, arguments); };
    AppPreferences.prototype.cloudSync = function () { return cordova(this, "cloudSync", { "platforms": ["iOS", "Windows", "Windows Phone 8"] }, arguments); };
    AppPreferences.prototype.defaults = function () { return cordova(this, "defaults", { "platforms": ["iOS", "Windows", "Windows Phone 8"] }, arguments); };
    AppPreferences.pluginName = "AppPreferences";
    AppPreferences.plugin = "cordova-plugin-app-preferences";
    AppPreferences.pluginRef = "plugins.appPreferences";
    AppPreferences.repo = "https://github.com/apla/me.apla.cordova.app-preferences";
    AppPreferences.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "macOS", "Windows 8", "Windows Phone"];
    AppPreferences = __decorate([
        Injectable()
    ], AppPreferences);
    return AppPreferences;
}(IonicNativePlugin));
export { AppPreferences };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1wcmVmZXJlbmNlcy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQW9DUCxrQ0FBaUI7Ozs7SUFXbkQsOEJBQUssYUFBQyxJQUFZLEVBQUUsR0FBWTtJQWVoQyw4QkFBSyxhQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsS0FBVztJQWM1QywrQkFBTSxhQUFDLElBQVksRUFBRSxHQUFZO0lBWWpDLGlDQUFRO0lBWVIsNkJBQUk7SUFhSiw4QkFBSyxhQUFDLFNBQWtCO0lBZXhCLDhCQUFLLGFBQUMsU0FBaUI7SUFRdkIsaUNBQVEsYUFBQyxTQUFpQjtJQVkxQixrQ0FBUztJQVlULGlDQUFROzs7Ozs7SUE1SEcsY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjO3lCQXRDM0I7RUFzQ29DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQXBwIFByZWZlcmVuY2VzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gcmVhZCBhbmQgd3JpdGUgYXBwIHByZWZlcmVuY2VzXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBQcmVmZXJlbmNlcyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXBwLXByZWZlcmVuY2VzL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBQcmVmZXJlbmNlczogQXBwUHJlZmVyZW5jZXMpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuYXBwUHJlZmVyZW5jZXMuZmV0Y2goJ2tleScpLnRoZW4oKHJlcykgPT4geyBjb25zb2xlLmxvZyhyZXMpOyB9KTtcbiAqXG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwUHJlZmVyZW5jZXMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHAtcHJlZmVyZW5jZXMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmFwcFByZWZlcmVuY2VzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGxhL21lLmFwbGEuY29yZG92YS5hcHAtcHJlZmVyZW5jZXMnLFxuICBwbGF0Zm9ybXM6IFtcbiAgICAnQW5kcm9pZCcsXG4gICAgJ0JsYWNrQmVycnkgMTAnLFxuICAgICdCcm93c2VyJyxcbiAgICAnaU9TJyxcbiAgICAnbWFjT1MnLFxuICAgICdXaW5kb3dzIDgnLFxuICAgICdXaW5kb3dzIFBob25lJ1xuICBdXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcFByZWZlcmVuY2VzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IGEgcHJlZmVyZW5jZSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGljdCBEaWN0aW9uYXJ5IGZvciBrZXkgKE9QVElPTkFMKVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGZldGNoKGRpY3Q6IHN0cmluZywga2V5Pzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgcHJlZmVyZW5jZSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGljdCBEaWN0aW9uYXJ5IGZvciBrZXkgKE9QVElPTkFMKVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgVmFsdWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBzdG9yZShkaWN0OiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZT86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB2YWx1ZSBmcm9tIHByZWZlcmVuY2VzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaWN0IERpY3Rpb25hcnkgZm9yIGtleSAoT1BUSU9OQUwpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgcmVtb3ZlKGRpY3Q6IHN0cmluZywga2V5Pzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgcHJlZmVyZW5jZXNcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBjbGVhckFsbCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IG5hdGl2ZSBwcmVmZXJlbmNlcyBpbnRlcmZhY2VcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBzaG93KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgbmF0aXZlIHByZWZlcmVuY2VzIGludGVyZmFjZVxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN1YnNjcmliZSB0cnVlIHZhbHVlIHRvIHN1YnNjcmliZSwgZmFsc2UgLSB1bnN1YnNjcmliZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgd2F0Y2goc3Vic2NyaWJlOiBib29sZWFuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIG5hbWVkIGNvbmZpZ3VyYXRpb24gY29udGV4dFxuICAgKiBJbiBpT1MgeW91J2xsIGdldCBhIHN1aXRlIGNvbmZpZ3VyYXRpb24sIG9uIEFuZHJvaWQg4oCUIG5hbWVkIGZpbGVcbiAgICogU3VwcG9ydHM6IEFuZHJvaWQsIGlPU1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3VpdGVOYW1lIHN1aXRlIG5hbWVcbiAgICogQHJldHVybnMge09iamVjdH0gQ3VzdG9tIG9iamVjdCwgYm91bmQgdG8gdGhhdCBzdWl0ZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBzdWl0ZShzdWl0ZU5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGlvc1N1aXRlKHN1aXRlTmFtZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGNsb3VkIHN5bmNocm9uaXplZCBjb25maWd1cmF0aW9uIGNvbnRleHRcbiAgICogQ3VycmVudGx5IHN1cHBvcnRzIFdpbmRvd3MgYW5kIGlPUy9tYWNPU1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBDdXN0b20gb2JqZWN0LCBib3VuZCB0byB0aGF0IHN1aXRlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddXG4gIH0pXG4gIGNsb3VkU3luYygpOiBPYmplY3Qge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gZGVmYXVsdCBjb25maWd1cmF0aW9uIGNvbnRleHRcbiAgICogQ3VycmVudGx5IHN1cHBvcnRzIFdpbmRvd3MgYW5kIGlPUy9tYWNPU1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBDdXN0b20gT2JqZWN0LCBib3VuZCB0byB0aGF0IHN1aXRlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddXG4gIH0pXG4gIGRlZmF1bHRzKCk6IE9iamVjdCB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=