var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CordovaCheck, CordovaInstance, InstanceCheck, InstanceProperty, IonicNativePlugin, Plugin, checkAvailability, getPromise } from '@ionic-native/core';
/**
 * @hidden
 */
var Contact = (function () {
    function Contact() {
        if (checkAvailability('navigator.contacts', 'create', 'Contacts') === true) {
            this._objectInstance = navigator.contacts.create();
        }
    }
    Contact.prototype.clone = function () {
        var newContact = new Contact();
        for (var prop in this) {
            if (prop === 'id')
                return;
            newContact[prop] = this[prop];
        }
        return newContact;
    };
    Contact.prototype.remove = function () {
        return;
    };
    Contact.prototype.save = function () {
        var _this = this;
        return getPromise(function (resolve, reject) {
            _this._objectInstance.save(function (contact) {
                _this._objectInstance = contact;
                resolve(_this);
            }, reject);
        });
    };
    __decorate([
        InstanceProperty,
        __metadata("design:type", String)
    ], Contact.prototype, "id", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", String)
    ], Contact.prototype, "rawId", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", String)
    ], Contact.prototype, "displayName", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Object)
    ], Contact.prototype, "name", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", String)
    ], Contact.prototype, "nickname", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Array)
    ], Contact.prototype, "phoneNumbers", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Array)
    ], Contact.prototype, "emails", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Array)
    ], Contact.prototype, "addresses", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Array)
    ], Contact.prototype, "ims", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Array)
    ], Contact.prototype, "organizations", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Date)
    ], Contact.prototype, "birthday", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", String)
    ], Contact.prototype, "note", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Array)
    ], Contact.prototype, "photos", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Array)
    ], Contact.prototype, "categories", void 0);
    __decorate([
        InstanceProperty,
        __metadata("design:type", Array)
    ], Contact.prototype, "urls", void 0);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Contact)
    ], Contact.prototype, "clone", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Contact.prototype, "remove", null);
    __decorate([
        InstanceCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Contact.prototype, "save", null);
    return Contact;
}());
export { Contact };
/**
 * @hidden
 */
var /**
 * @hidden
 */
ContactName = (function () {
    function ContactName(formatted, familyName, givenName, middleName, honorificPrefix, honorificSuffix) {
        this.formatted = formatted;
        this.familyName = familyName;
        this.givenName = givenName;
        this.middleName = middleName;
        this.honorificPrefix = honorificPrefix;
        this.honorificSuffix = honorificSuffix;
    }
    return ContactName;
}());
/**
 * @hidden
 */
export { ContactName };
/**
 * @hidden
 */
var /**
 * @hidden
 */
ContactField = (function () {
    function ContactField(type, value, pref) {
        this.type = type;
        this.value = value;
        this.pref = pref;
    }
    return ContactField;
}());
/**
 * @hidden
 */
export { ContactField };
/**
 * @hidden
 */
var /**
 * @hidden
 */
ContactAddress = (function () {
    function ContactAddress(pref, type, formatted, streetAddress, locality, region, postalCode, country) {
        this.pref = pref;
        this.type = type;
        this.formatted = formatted;
        this.streetAddress = streetAddress;
        this.locality = locality;
        this.region = region;
        this.postalCode = postalCode;
        this.country = country;
    }
    return ContactAddress;
}());
/**
 * @hidden
 */
export { ContactAddress };
/**
 * @hidden
 */
var /**
 * @hidden
 */
ContactOrganization = (function () {
    function ContactOrganization(type, name, department, title, pref) {
        this.type = type;
        this.name = name;
        this.department = department;
        this.title = title;
        this.pref = pref;
    }
    return ContactOrganization;
}());
/**
 * @hidden
 */
export { ContactOrganization };
/**
 * @hidden
 */
var /**
 * @hidden
 */
ContactFindOptions = (function () {
    function ContactFindOptions(filter, multiple, desiredFields, hasPhoneNumber) {
        this.filter = filter;
        this.multiple = multiple;
        this.desiredFields = desiredFields;
        this.hasPhoneNumber = hasPhoneNumber;
    }
    return ContactFindOptions;
}());
/**
 * @hidden
 */
export { ContactFindOptions };
/**
 * @name Contacts
 * @description
 * Access and manage Contacts on the device.
 *
 * @deprecated
 * @usage
 *
 * ```typescript
 * import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
 *
 * constructor(private contacts: Contacts) { }
 *
 * let contact: Contact = this.contacts.create();
 *
 * contact.name = new ContactName(null, 'Smith', 'John');
 * contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
 * contact.save().then(
 *   () => console.log('Contact saved!', contact),
 *   (error: any) => console.error('Error saving contact.', error)
 * );
 *
 * ```
 * @classes
 * Contact
 * @interfaces
 * IContactProperties
 * IContactError
 * IContactName
 * IContactField
 * IContactAddress
 * IContactOrganization
 * IContactFindOptions
 */
var Contacts = (function (_super) {
    __extends(Contacts, _super);
    function Contacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a single contact.
     * @returns {Contact} Returns a Contact object
     */
    /**
       * Create a single contact.
       * @returns {Contact} Returns a Contact object
       */
    Contacts.prototype.create = /**
       * Create a single contact.
       * @returns {Contact} Returns a Contact object
       */
    function () {
        return new Contact();
    };
    /**
     * Search for contacts in the Contacts list.
     * @param {ContactFieldType[]} fields Contact fields to be used as a search qualifier
     * @param {IContactFindOptions} [options] Optional options for the query
     * @returns {Promise<Contact[]>} Returns a Promise that resolves with the search results (an array of Contact objects)
     */
    /**
       * Search for contacts in the Contacts list.
       * @param {ContactFieldType[]} fields Contact fields to be used as a search qualifier
       * @param {IContactFindOptions} [options] Optional options for the query
       * @returns {Promise<Contact[]>} Returns a Promise that resolves with the search results (an array of Contact objects)
       */
    Contacts.prototype.find = /**
       * Search for contacts in the Contacts list.
       * @param {ContactFieldType[]} fields Contact fields to be used as a search qualifier
       * @param {IContactFindOptions} [options] Optional options for the query
       * @returns {Promise<Contact[]>} Returns a Promise that resolves with the search results (an array of Contact objects)
       */
    function (fields, options) {
        return getPromise(function (resolve, reject) {
            navigator.contacts.find(fields, function (contacts) {
                resolve(contacts.map(processContact));
            }, reject, options);
        });
    };
    /**
     * Select a single Contact.
     * @returns {Promise<Contact>} Returns a Promise that resolves with the selected Contact
     */
    /**
       * Select a single Contact.
       * @returns {Promise<Contact>} Returns a Promise that resolves with the selected Contact
       */
    Contacts.prototype.pickContact = /**
       * Select a single Contact.
       * @returns {Promise<Contact>} Returns a Promise that resolves with the selected Contact
       */
    function () {
        return getPromise(function (resolve, reject) {
            navigator.contacts.pickContact(function (contact) { return resolve(processContact(contact)); }, reject);
        });
    };
    __decorate([
        CordovaCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, Object]),
        __metadata("design:returntype", Promise)
    ], Contacts.prototype, "find", null);
    __decorate([
        CordovaCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Contacts.prototype, "pickContact", null);
    /**
     * @name Contacts
     * @description
     * Access and manage Contacts on the device.
     *
     * @deprecated
     * @usage
     *
     * ```typescript
     * import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
     *
     * constructor(private contacts: Contacts) { }
     *
     * let contact: Contact = this.contacts.create();
     *
     * contact.name = new ContactName(null, 'Smith', 'John');
     * contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
     * contact.save().then(
     *   () => console.log('Contact saved!', contact),
     *   (error: any) => console.error('Error saving contact.', error)
     * );
     *
     * ```
     * @classes
     * Contact
     * @interfaces
     * IContactProperties
     * IContactError
     * IContactName
     * IContactField
     * IContactAddress
     * IContactOrganization
     * IContactFindOptions
     */
    Contacts = __decorate([
        Plugin({
            pluginName: 'Contacts',
            plugin: 'cordova-plugin-contacts',
            pluginRef: 'navigator.contacts',
            repo: 'https://github.com/apache/cordova-plugin-contacts',
            platforms: [
                'Android',
                'BlackBerry 10',
                'Browser',
                'Firefox OS',
                'iOS',
                'Ubuntu',
                'Windows',
                'Windows 8',
                'Windows Phone'
            ]
        })
    ], Contacts);
    return Contacts;
}(IonicNativePlugin));
export { Contacts };
/**
 * @hidden
 */
function processContact(contact) {
    var newContact = new Contact();
    for (var prop in contact) {
        if (typeof contact[prop] === 'function')
            continue;
        newContact[prop] = contact[prop];
    }
    return newContact;
}
//# sourceMappingURL=index.js.map