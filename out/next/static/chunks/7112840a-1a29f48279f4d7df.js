"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,n){n.d(t,{JU:function(){return sa},PL:function(){return s$},QT:function(){return sG},ad:function(){return sp},hJ:function(){return si},pl:function(){return sH}});var r,s,i=n(5816),a=n(8463),o=n(3333),l=n(4444),u=n(3510);n(3454);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let d="9.14.0",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let n=t.map(v);f.debug(`Firestore (${d}): ${e}`,...n)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let n=t.map(v);f.error(`Firestore (${d}): ${e}`,...n)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let n=t.map(v);f.warn(`Firestore (${d}): ${e}`,...n)}}function v(e){var t;if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function w(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),s=new I;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new I,e.enqueueRetryable(()=>r(this.currentUser))};let i=()=>{let t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new I)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>{var n;return this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||w(),new C(t.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||w(),new c(e)}}class _{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=c.FIRST_PARTY,this.p=new Map}I(){var e;return this.g?this.g():(("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)&&w(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class N{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new _(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,g("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>{var t;return e?("string"==typeof e.token||w(),this.A=e.token,new D(e.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function L(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class R{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=L(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function x(e,t){return e<t?-1:e>t?1:0}function V(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new M(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new M(0,0))}static max(){return new O(new M(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U{constructor(e,t,n){void 0===t?t=0:t>e.length&&w(),void 0===n?n=e.length-t:n>e.length-t&&w(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let s=e.get(r),i=t.get(r);if(s<i)return -1;if(s>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends U{construct(e,t,n){return new F(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new F(t)}static emptyPath(){return new F([])}}let P=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends U{construct(e,t,n){return new q(e,t,n)}static isValidIdentifier(e){return P.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,s=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},i=!1;for(;r<e.length;){let a=e[r];if("\\"===a){if(r+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[r+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=o,r+=2}else"`"===a?(i=!i,r++):"."!==a||i?(n+=a,r++):(s(),r++)}if(s(),i)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new q(t)}static emptyPath(){return new q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class B{constructor(e){this.path=e}static fromPath(e){return new B(F.fromString(e))}static fromName(e){return new B(F.fromString(e).popFirst(5))}static empty(){return new B(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===F.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new F(e.slice()))}}function K(e){return new Q(e.readTime,e.key,-1)}class Q{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Q(O.min(),B.empty(),-1)}static max(){return new Q(O.max(),B.empty(),-1)}}function z(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=B.comparator(e.documentKey,t.documentKey))?n:x(e.largestBatchId,t.largestBatchId)}class G{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function j(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof $?t:$.resolve(t)}catch(n){return $.reject(n)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,n)=>{t(e)})}static reject(e){return new $((t,n)=>{n(e)})}static waitFor(e){return new $((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=$.resolve(!1);for(let n of e)t=t.next(e=>e?$.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new $((n,r)=>{let s=e.length,i=Array(s),a=0;for(let o=0;o<s;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new $((n,r)=>{let s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}function H(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class W{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Y(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function X(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function J(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ W.at=-1;class Z{constructor(e,t){this.comparator=e,this.root=t||et.EMPTY}insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ee(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ee(this.root,e,this.comparator,!1)}getReverseIterator(){return new ee(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ee(this.root,e,this.comparator,!0)}}class ee{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:et.RED,this.left=null!=r?r:et.EMPTY,this.right=null!=s?s:et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new et(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,s=n(e,r.key);return(r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return et.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();let e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1,et.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,n,r,s){return this}insert(e,t,n){return new et(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class en{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new er(this.data.getIterator())}getIteratorFrom(e){return new er(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof en)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,s=n.getNext().key;if(0!==this.comparator(r,s))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new en(this.comparator);return t.data=e,t}}class er{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class es{constructor(e){this.fields=e,e.sort(q.comparator)}static empty(){return new es([])}unionWith(e){let t=new en(q.comparator);for(let n of this.fields)t=t.add(n);for(let r of e)t=t.add(r);return new es(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return V(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ei{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new ei(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ei(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ei.EMPTY_BYTE_STRING=new ei("");let ea=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eo(e){if(!e&&w(),"string"==typeof e){let t=0,n=ea.exec(e);if(!n&&w(),n[1]){let r=n[1];t=Number(r=(r+"000000000").substr(0,9))}let s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:el(e.seconds),nanos:el(e.nanos)}}function el(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eu(e){return"string"==typeof e?ei.fromBase64String(e):ei.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eh(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ec(e){let t=eo(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ed{constructor(e,t,n,r,s,i,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class ef{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ef("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ef&&e.projectId===this.projectId&&e.database===this.database}}function em(e){return null==e}function eg(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ep={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ey(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eh(e)?4:eD(e)?9007199254740991:10:w()}function ev(e,t){var n,r,s,i;if(e===t)return!0;let a=ey(e);if(a!==ey(t))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ec(e).isEqual(ec(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eo(e.timestampValue),r=eo(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eu(e.bytesValue).isEqual(eu(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return el(e.geoPointValue.latitude)===el(t.geoPointValue.latitude)&&el(e.geoPointValue.longitude)===el(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return el(e.integerValue)===el(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=el(e.doubleValue),r=el(t.doubleValue);return n===r?eg(n)===eg(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return V(e.arrayValue.values||[],t.arrayValue.values||[],ev);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Y(n)!==Y(r))return!1;for(let s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!ev(n[s],r[s])))return!1;return!0}(e,t);default:return w()}}function ew(e,t){return void 0!==(e.values||[]).find(e=>ev(e,t))}function eE(e,t){if(e===t)return 0;let n=ey(e),r=ey(t);if(n!==r)return x(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=el(e.integerValue||e.doubleValue),r=el(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eT(e.timestampValue,t.timestampValue);case 4:return eT(ec(e),ec(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eu(e),r=eu(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){let i=x(n[s],r[s]);if(0!==i)return i}return x(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=x(el(e.latitude),el(t.latitude));return 0!==n?n:x(el(e.longitude),el(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){let i=eE(n[s],r[s]);if(i)return i}return x(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ep.mapValue&&t===ep.mapValue)return 0;if(e===ep.mapValue)return 1;if(t===ep.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let a=0;a<r.length&&a<i.length;++a){let o=x(r[a],i[a]);if(0!==o)return o;let l=eE(n[r[a]],s[i[a]]);if(0!==l)return l}return x(r.length,i.length)}(e.mapValue,t.mapValue);default:throw w()}}function eT(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);let n=eo(e),r=eo(t),s=x(n.seconds,r.seconds);return 0!==s?s:x(n.nanos,r.nanos)}function eI(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eo(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eu(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,B.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eI(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let s of t)r?r=!1:n+=",",n+=`${s}:${eI(e.fields[s])}`;return n+"}"}(e.mapValue):w()}function eC(e){return!!e&&"integerValue"in e}function eS(e){return!!e&&"arrayValue"in e}function eA(e){return!!e&&"nullValue"in e}function ek(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function e_(e){return!!e&&"mapValue"in e}function eN(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return X(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eN(n)),t}if(e.arrayValue){let n={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=eN(e.arrayValue.values[r]);return n}return Object.assign({},e)}function eD(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eb{constructor(e){this.value=e}static empty(){return new eb({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!e_(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eN(t)}setAll(e){let t=q.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){let i=this.getFieldsMap(t);this.applyChanges(i,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=eN(e):r.push(s.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){let t=this.field(e.popLast());e_(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ev(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];e_(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(X(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eb(eN(this.value))}}function eL(e){let t=[];return X(e.fields,(e,n)=>{let r=new q([e]);if(e_(n)){let s=eL(n.mapValue).fields;if(0===s.length)t.push(r);else for(let i of s)t.push(r.child(i))}else t.push(r)}),new es(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eR{constructor(e,t,n,r,s,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new eR(e,0,O.min(),O.min(),eb.empty(),0)}static newFoundDocument(e,t,n){return new eR(e,1,t,O.min(),n,0)}static newNoDocument(e,t){return new eR(e,2,t,O.min(),eb.empty(),0)}static newUnknownDocument(e,t){return new eR(e,3,t,O.min(),eb.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eb.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eb.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eR&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eR(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ex{constructor(e,t=null,n=[],r=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=a,this.ht=null}}function eV(e,t=null,n=[],r=[],s=null,i=null,a=null){return new ex(e,t,n,r,s,i,a)}function eM(e){var t;let n=e;if(null===n.ht){let r=n.path.canonicalString();null!==n.collectionGroup&&(r+="|cg:"+n.collectionGroup),r+="|f:",r+=n.filters.map(e=>{var t;return e.field.canonicalString()+e.op.toString()+eI(t=e.value)}).join(","),r+="|ob:",r+=n.orderBy.map(e=>{var t;return e.field.canonicalString()+e.dir}).join(","),em(n.limit)||(r+="|l:",r+=n.limit),n.startAt&&(r+="|lb:",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(e=>{var t;return eI(e)}).join(",")),n.endAt&&(r+="|ub:",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(e=>{var t;return eI(e)}).join(",")),n.ht=r}return n.ht}function eO(e,t){var n,r;if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!eW(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ev(n.value,r.value))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eX(e.startAt,t.startAt)&&eX(e.endAt,t.endAt)}function eU(e){return B.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class eF extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new eP(e,t,n):"array-contains"===t?new eQ(e,n):"in"===t?new ez(e,n):"not-in"===t?new eG(e,n):"array-contains-any"===t?new ej(e,n):new eF(e,t,n)}static lt(e,t,n){return"in"===t?new eq(e,n):new eB(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(eE(t,this.value)):null!==t&&ey(this.value)===ey(t)&&this.ft(eE(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class eP extends eF{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){let t=B.comparator(e.key,this.key);return this.ft(t)}}class eq extends eF{constructor(e,t){super(e,"in",t),this.keys=eK("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eB extends eF{constructor(e,t){super(e,"not-in",t),this.keys=eK("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eK(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>B.fromName(e.referenceValue))}class eQ extends eF{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eS(t)&&ew(t.arrayValue,this.value)}}class ez extends eF{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ew(this.value.arrayValue,t)}}class eG extends eF{constructor(e,t){super(e,"not-in",t)}matches(e){if(ew(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ew(this.value.arrayValue,t)}}class ej extends eF{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eS(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ew(this.value.arrayValue,e))}}class e${constructor(e,t){this.position=e,this.inclusive=t}}class eH{constructor(e,t="asc"){this.field=e,this.dir=t}}function eW(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function eY(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){let i=t[s],a=e.position[s];if(r=i.field.isKeyField()?B.comparator(B.fromName(a.referenceValue),n.key):eE(a,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function eX(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ev(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eJ{constructor(e,t=null,n=[],r=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function eZ(e){return new eJ(e)}function e0(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e1(e){var t,n;let r=e;if(null===r._t){r._t=[];let s=function(e){for(let t of e.filters)if(t.dt())return t.field;return null}(r),i=(n=r).explicitOrderBy.length>0?n.explicitOrderBy[0].field:null;if(null!==s&&null===i)s.isKeyField()||r._t.push(new eH(s)),r._t.push(new eH(q.keyField(),"asc"));else{let a=!1;for(let o of r.explicitOrderBy)r._t.push(o),o.field.isKeyField()&&(a=!0);if(!a){let l=r.explicitOrderBy.length>0?r.explicitOrderBy[r.explicitOrderBy.length-1].dir:"asc";r._t.push(new eH(q.keyField(),l))}}}return r._t}function e2(e){var t;let n=e;if(!n.wt){if("F"===n.limitType)n.wt=eV(n.path,n.collectionGroup,e1(n),n.filters,n.limit,n.startAt,n.endAt);else{let r=[];for(let s of e1(n)){let i="desc"===s.dir?"asc":"desc";r.push(new eH(s.field,i))}let a=n.endAt?new e$(n.endAt.position,n.endAt.inclusive):null,o=n.startAt?new e$(n.startAt.position,n.startAt.inclusive):null;n.wt=eV(n.path,n.collectionGroup,r,n.filters,n.limit,a,o)}}return n.wt}function e4(e,t,n){return new eJ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function e3(e,t){return eO(e2(e),e2(t))&&e.limitType===t.limitType}function e9(e){return`${eM(e2(e))}|lt:${e.limitType}`}function e5(e){var t;let n;return`Query(target=${n=(t=e2(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>{var t;return`${e.field.canonicalString()} ${e.op} ${eI(t=e.value)}`}).join(", ")}]`),em(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>{var t;return`${e.field.canonicalString()} (${e.dir})`}).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(e=>{var t;return eI(e)}).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(e=>{var t;return eI(e)}).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function e6(e,t){var n,r;return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):B.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eY(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,e1(e),t))&&(!e.endAt||!!function(e,t,n){let r=eY(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,e1(e),t))}function e8(e){return(t,n)=>{let r=!1;for(let s of e1(e)){let i=e7(s,t,n);if(0!==i)return i;r=r||s.field.isKeyField()}return 0}}function e7(e,t,n){let r=e.field.isKeyField()?B.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?eE(r,s):w()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return w()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function te(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eg(t)?"-0":t}}function tt(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tn{constructor(){this._=void 0}}function tr(e,t,n){return e instanceof ta?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof to?tl(e,t):e instanceof tu?th(e,t):function(e,t){let n=ti(e,t),r=td(n)+td(e.yt);return eC(n)&&eC(e.yt)?tt(r):te(e.It,r)}(e,t)}function ts(e,t,n){return e instanceof to?tl(e,t):e instanceof tu?th(e,t):n}function ti(e,t){var n;return e instanceof tc?eC(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class ta extends tn{}class to extends tn{constructor(e){super(),this.elements=e}}function tl(e,t){let n=tf(t);for(let r of e.elements)n.some(e=>ev(e,r))||n.push(r);return{arrayValue:{values:n}}}class tu extends tn{constructor(e){super(),this.elements=e}}function th(e,t){let n=tf(t);for(let r of e.elements)n=n.filter(e=>!ev(e,r));return{arrayValue:{values:n}}}class tc extends tn{constructor(e,t){super(),this.It=e,this.yt=t}}function td(e){return el(e.integerValue||e.doubleValue)}function tf(e){return eS(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tm{constructor(e,t){this.version=e,this.transformResults=t}}class tg{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tg}static exists(e){return new tg(void 0,e)}static updateTime(e){return new tg(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tp(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ty{}function tv(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tN(e.key,tg.none()):new tC(e.key,e.data,tg.none());{let n=e.data,r=eb.empty(),s=new en(q.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);null===a&&i.length>1&&(i=i.popLast(),a=n.field(i)),null===a?r.delete(i):r.set(i,a),s=s.add(i)}return new tS(e.key,r,new es(s.toArray()),tg.none())}}function tw(e,t,n){e instanceof tC?function(e,t,n){let r=e.value.clone(),s=tk(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof tS?function(e,t,n){if(!tp(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=tk(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(tA(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function tE(e,t,n,r){var s,i,a;return e instanceof tC?function(e,t,n,r){if(!tp(e.precondition,t))return n;let s=e.value.clone(),i=t_(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof tS?function(e,t,n,r){if(!tp(e.precondition,t))return n;let s=t_(e.fieldTransforms,r,t),i=t.data;return(i.setAll(tA(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tp(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tT(e,t){let n=null;for(let r of e.fieldTransforms){let s=t.data.field(r.field),i=ti(r.transform,s||null);null!=i&&(null===n&&(n=eb.empty()),n.set(r.field,i))}return n||null}function tI(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&V(n,r,(e,t)=>{var n,r,s,i;return e.field.isEqual(t.field)&&(s=e.transform,i=t.transform,s instanceof to&&i instanceof to||s instanceof tu&&i instanceof tu?V(s.elements,i.elements,ev):s instanceof tc&&i instanceof tc?ev(s.yt,i.yt):s instanceof ta&&i instanceof ta)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tC extends ty{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tS extends ty{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tA(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function tk(e,t,n){var r;let s=new Map;(r=e.length===n.length)||w();for(let i=0;i<n.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);s.set(a.field,ts(o,l,n[i]))}return s}function t_(e,t,n){let r=new Map;for(let s of e){let i=s.transform,a=n.data.field(s.field);r.set(s.field,tr(i,a,t))}return r}class tN extends ty{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tD extends ty{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tb{constructor(e){this.count=e}}function tL(e){if(void 0===e)return p("GRPC error has no .code"),E.UNKNOWN;switch(e){case r.OK:return E.OK;case r.CANCELLED:return E.CANCELLED;case r.UNKNOWN:return E.UNKNOWN;case r.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case r.INTERNAL:return E.INTERNAL;case r.UNAVAILABLE:return E.UNAVAILABLE;case r.UNAUTHENTICATED:return E.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case r.NOT_FOUND:return E.NOT_FOUND;case r.ALREADY_EXISTS:return E.ALREADY_EXISTS;case r.PERMISSION_DENIED:return E.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case r.ABORTED:return E.ABORTED;case r.OUT_OF_RANGE:return E.OUT_OF_RANGE;case r.UNIMPLEMENTED:return E.UNIMPLEMENTED;case r.DATA_LOSS:return E.DATA_LOSS;default:return w()}}(s=r||(r={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tR{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[r,s]of n)if(this.equalsFn(r,e))return s}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){X(this.inner,(t,n)=>{for(let[r,s]of n)e(r,s)})}isEmpty(){return J(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tx=new Z(B.comparator),tV=new Z(B.comparator);function tM(...e){let t=tV;for(let n of e)t=t.insert(n.key,n);return t}function tO(e){let t=tV;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tU(){return tP()}function tF(){return tP()}function tP(){return new tR(e=>e.toString(),(e,t)=>e.isEqual(t))}let tq=new Z(B.comparator),tB=new en(B.comparator);function tK(...e){let t=tB;for(let n of e)t=t.add(n);return t}let tQ=new en(x);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tz{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,tG.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new tz(O.min(),r,tQ,tx,tK())}}class tG{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new tG(n,t,tK(),tK(),tK())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tj{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class t${constructor(e,t){this.targetId=e,this.At=t}}class tH{constructor(e,t,n=ei.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class tW{constructor(){this.Rt=0,this.bt=tJ(),this.Pt=ei.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=tK(),t=tK(),n=tK();return this.bt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:w()}}),new tG(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=tJ()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class tY{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=tx,this.qt=tX(),this.Kt=new en(x)}Gt(e){for(let t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(let n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{let n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:w()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((e,n)=>{this.Ht(n)&&t(n)})}Yt(e){let t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){let s=r.target;if(eU(s)){if(0===n){let i=new B(s.path);this.jt(t,i,eR.newNoDocument(i,O.min()))}else{var a;(a=1===n)||w()}}else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){let t=new Map;this.Lt.forEach((n,r)=>{let s=this.Xt(r);if(s){if(n.current&&eU(s.target)){let i=new B(s.target.path);null!==this.Ut.get(i)||this.ee(r,i)||this.jt(r,i,eR.newNoDocument(i,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}});let n=tK();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Ut.forEach((t,n)=>n.setReadTime(e));let r=new tz(e,t,this.Kt,this.Ut,n);return this.Ut=tx,this.qt=tX(),this.Kt=new en(x),r}Qt(e,t){if(!this.Ht(e))return;let n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;let r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){let t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new tW,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new en(x),this.qt=this.qt.insert(e,t)),t}Ht(e){let t=null!==this.Xt(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){let t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new tW),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function tX(){return new Z(B.comparator)}function tJ(){return new Z(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tZ={asc:"ASCENDING",desc:"DESCENDING"},t0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class t1{constructor(e,t){this.databaseId=e,this.gt=t}}function t2(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function t4(e,t){return e.gt?t.toBase64():t.toUint8Array()}function t3(e){return!e&&w(),O.fromTimestamp(function(e){let t=eo(e);return new M(t.seconds,t.nanos)}(e))}function t9(e,t){var n;return new F(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function t5(e){var t;let n=F.fromString(e);return ni(n)||w(),n}function t6(e,t){return t9(e.databaseId,t.path)}function t8(e,t){let n=t5(t);if(n.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new B(nt(n))}function t7(e,t){return t9(e.databaseId,t)}function ne(e){return new F(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nt(e){var t;return e.length>4&&"documents"===e.get(4)||w(),e.popFirst(5)}function nn(e,t,n){return{name:t6(e,t),fields:n.value.mapValue.fields}}function nr(e){return{fieldPath:e.canonicalString()}}function ns(e){return q.fromServerFormat(e.fieldPath)}function ni(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class na{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){let s=this.mutations[r];s.key.isEqual(e.key)&&tw(s,e,n[r])}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tE(n,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=tE(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tF();return this.mutations.forEach(r=>{let s=e.get(r.key),i=s.overlayedDocument,a=this.applyToLocalView(i,s.mutatedFields);a=t.has(r.key)?null:a;let o=tv(i,a);null!==o&&n.set(r.key,o),i.isValidDocument()||i.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tK())}isEqual(e){return this.batchId===e.batchId&&V(this.mutations,e.mutations,(e,t)=>tI(e,t))&&V(this.baseMutations,e.baseMutations,(e,t)=>tI(e,t))}}class no{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){var r;(r=e.mutations.length===n.length)||w();let s=tq,i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new no(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nu{constructor(e,t,n,r,s=O.min(),i=O.min(),a=ei.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a}withSequenceNumber(e){return new nu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new nu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new nu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nh{constructor(e){this.re=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nc{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(el(e.integerValue));else if("doubleValue"in e){let n=el(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),eg(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){let r=e.timestampValue;this.le(t,20),"string"==typeof r?t.de(r):(t.de(`${r.seconds||""}`),t.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(eu(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){let s=e.geoPointValue;this.le(t,45),t.fe(s.latitude||0),t.fe(s.longitude||0)}else"mapValue"in e?eD(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):w()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){let n=e.fields||{};for(let r of(this.le(t,55),Object.keys(n)))this._e(r,t),this.ae(n[r],t)}pe(e,t){let n=e.values||[];for(let r of(this.le(t,50),n))this.ae(r,t)}ge(e,t){this.le(t,37),B.fromName(e).path.forEach(e=>{this.le(t,60),this.Ie(e,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}nc.Te=new nc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nd{constructor(){this.Ye=new nf}addToCollectionParentIndex(e,t){return this.Ye.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Q.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Q.min())}updateCollectionGroup(e,t,n){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class nf{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new en(F.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new en(F.comparator)).toArray()}}new Uint8Array(0);class nm{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new nm(e,nm.DEFAULT_COLLECTION_PERCENTILE,nm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ nm.DEFAULT_COLLECTION_PERCENTILE=10,nm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nm.DEFAULT=new nm(41943040,nm.DEFAULT_COLLECTION_PERCENTILE,nm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nm.DISABLED=new nm(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ng{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ng(0)}static vn(){return new ng(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class np{constructor(){this.changes=new tR(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eR.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?$.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ny{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nv{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.getBaseDocument(e,t,n))).next(e=>(null!==n&&tE(n.mutation,e,es.empty(),M.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tK()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tK()){let r=tU();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tM();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tU();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tK()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=tx,i=tP(),a=tP();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof tS)?s=s.insert(t.key,t):void 0!==a&&(i.set(t.key,a.mutation.getFieldMask()),tE(a.mutation,t,a.mutation.getFieldMask(),M.now()))}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new ny(t,null!==(n=i.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tP(),r=new Z((e,t)=>e-t),s=tK();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let s of e)s.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=n.get(e)||es.empty();a=s.applyToLocalView(i,a),n.set(e,a);let o=(r.get(s.batchId)||tK()).add(e);r=r.insert(s.batchId,o)})}).next(()=>{let i=[],a=r.getReverseIterator();for(;a.hasNext();){let o=a.getNext(),l=o.key,u=o.value,h=tF();u.forEach(e=>{if(!s.has(e)){let r=tv(t.get(e),n.get(e));null!==r&&h.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,l,h))}return $.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){var r,s;return B.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{let i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):$.resolve(tU()),a=-1,o=s;return i.next(t=>$.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),s.get(t)?$.resolve():this.getBaseDocument(e,t,n).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,o,t,tK())).next(e=>({batchId:a,changes:tO(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(e=>{let t=tM();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,s=tM();return this.indexManager.getCollectionParents(e,r).next(i=>$.forEach(i,i=>{var a,o;let l=(o=i.child(r),new eJ(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next(s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId))).next(e=>{e.forEach((e,t)=>{let n=t.getKey();null===r.get(n)&&(r=r.insert(n,eR.newInvalidDocument(n)))});let n=tM();return r.forEach((r,s)=>{let i=e.get(r);void 0!==i&&tE(i.mutation,s,es.empty(),M.now()),e6(t,s)&&(n=n.insert(r,s))}),n})}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):$.resolve(eR.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nw{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return $.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:t3(t.createTime)}),$.resolve()}getNamedQuery(e,t){return $.resolve(this.ts.get(t))}saveNamedQuery(e,t){var n;return this.ts.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,r,s,i,a,o,l,u;let h=function(e){let t=t5(e);return 4===t.length?F.emptyPath():nt(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){(t=1===d)||w();let m=c.from[0];m.allDescendants?f=m.collectionId:h=h.child(m.collectionId)}let g=[];c.where&&(g=function e(t){var n;return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=ns(e.unaryFilter.field);return eF.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=ns(e.unaryFilter.field);return eF.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=ns(e.unaryFilter.field);return eF.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let s=ns(e.unaryFilter.field);return eF.create(s,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(t)]:void 0!==t.fieldFilter?[(n=t,eF.create(ns(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(n.fieldFilter.op),n.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):w():[]}(c.where));let p=[];c.orderBy&&(p=c.orderBy.map(e=>{var t;return new eH(ns(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}));let y=null,v;c.limit&&(y=em(v="object"==typeof(n=c.limit)?n.value:n)?null:v);let E=null;c.startAt&&(E=function(e){let t=!!e.before,n=e.values||[];return new e$(n,t)}(c.startAt));let T=null;return c.endAt&&(T=function(e){let t=!e.before,n=e.values||[];return new e$(n,t)}(c.endAt)),r=h,s=f,i=p,a=g,o=y,l=E,u=T,new eJ(r,s,i,a,o,"F",l,u)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e4(t,t.limit,"L"):t}(t.bundledQuery),readTime:t3(t.readTime)}),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nE{constructor(){this.overlays=new Z(B.comparator),this.es=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tU();return $.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ue(e,t,r)}),$.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.es.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),$.resolve()}getOverlaysForCollection(e,t,n){let r=tU(),s=t.length+1,i=new B(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let o=a.getNext().value,l=o.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&o.largestBatchId>n&&r.set(o.getKey(),o)}return $.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Z((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let a=i.getNext().value;if(a.getKey().getCollectionGroup()===t&&a.largestBatchId>n){let o=s.get(a.largestBatchId);null===o&&(o=tU(),s=s.insert(a.largestBatchId,o)),o.set(a.getKey(),a)}}let l=tU(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((e,t)=>l.set(e,t)),!(l.size()>=r)););return $.resolve(l)}ue(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let s=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,s)}this.overlays=this.overlays.insert(n.key,new nl(t,n));let i=this.es.get(t);void 0===i&&(i=tK(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nT{constructor(){this.ns=new en(nI.ss),this.rs=new en(nI.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let n=new nI(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new nI(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new B(new F([])),n=new nI(t,e),r=new nI(t,e+1),s=[];return this.rs.forEachInRange([n,r],e=>{this.cs(e),s.push(e.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new B(new F([])),n=new nI(t,e),r=new nI(t,e+1),s=tK();return this.rs.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){let t=new nI(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nI{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return B.comparator(e.key,t.key)||x(e._s,t._s)}static os(e,t){return x(e._s,t._s)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new en(nI.ss)}checkEmpty(e){return $.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new na(s,t,n,r);for(let a of(this.mutationQueue.push(i),r))this.gs=this.gs.add(new nI(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(i)}lookupMutationBatch(e,t){return $.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ps(t+1),r=n<0?0:n;return $.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nI(t,0),r=new nI(t,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,r],e=>{let t=this.ys(e._s);s.push(t)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new en(x);return t.forEach(e=>{let t=new nI(e,0),r=new nI(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],e=>{n=n.add(e._s)})}),$.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,s=n;B.isDocumentKey(s)||(s=s.child(""));let i=new nI(new B(s),0),a=new en(x);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e._s)),!0)},i),$.resolve(this.Is(a))}Is(e){let t=[];return e.forEach(e=>{let n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){var n;0===this.Ts(t.batchId,"removed")||w(),this.mutationQueue.shift();let r=this.gs;return $.forEach(t.mutations,n=>{let s=new nI(n.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,t){let n=new nI(t,0),r=this.gs.firstAfterOrEqual(n);return $.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nS{constructor(e){this.Es=e,this.docs=new Z(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return $.resolve(n?n.document.mutableCopy():eR.newInvalidDocument(t))}getEntries(e,t){let n=tx;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eR.newInvalidDocument(e))}),$.resolve(n)}getAllFromCollection(e,t,n){let r=tx,s=new B(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){let{key:a,value:{document:o}}=i.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||0>=z(K(o),n)||(r=r.insert(o.key,o.mutableCopy()))}return $.resolve(r)}getAllFromCollectionGroup(e,t,n,r){w()}As(e,t){return $.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nA(this)}getSize(e){return $.resolve(this.size)}}class nA extends np{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)}),$.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nk{constructor(e){this.persistence=e,this.Rs=new tR(e=>eM(e),eO),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.bs=0,this.Ps=new nT,this.targetCount=0,this.vs=ng.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),$.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new ng(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Dn(t),$.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,n){let r=0,s=[];return this.Rs.forEach((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Rs.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),$.waitFor(s).next(()=>r)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){let n=this.Rs.get(t)||null;return $.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),$.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);let r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),$.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ps.ds(t);return $.resolve(n)}containsKey(e,t){return $.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n_{constructor(e,t){var n;this.Vs={},this.overlays={},this.Ss=new W(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new nk(this),this.indexManager=new nd,this.remoteDocumentCache=(n=e=>this.referenceDelegate.xs(e),new nS(n)),this.It=new nh(t),this.Ns=new nw(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new nC(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){g("MemoryPersistence","Starting transaction:",e);let r=new nN(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(e=>this.referenceDelegate.Os(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ms(e,t){return $.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class nN extends G{constructor(e){super(),this.currentSequenceNumber=e}}class nD{constructor(e){this.persistence=e,this.Fs=new nT,this.$s=null}static Bs(e){return new nD(e)}get Ls(){if(this.$s)return this.$s;throw w()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),$.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),$.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Ls,n=>{let r=B.fromPath(n);return this.Us(e,r).next(e=>{e||t.removeEntry(r,O.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return $.or([()=>$.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nb{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=tK(),r=tK();for(let s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new nb(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nL{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next(s=>s||this.Oi(e,t,r,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(e0(t))return $.resolve(null);let n=e2(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=e4(t,null,"F"),n=e2(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let s=tK(...r);return this.Ni.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let i=this.Fi(t,r);return this.$i(t,i,s,n.readTime)?this.ki(e,e4(t,null,"F")):this.Bi(e,i,t,n)}))})))}Oi(e,t,n,r){return e0(t)||r.isEqual(O.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(s=>{let i=this.Fi(t,s);return this.$i(t,i,n,r)?this.Mi(e,t):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),e5(t)),this.Bi(e,i,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=O.fromTimestamp(1e9===r?new M(n+1,0):new M(n,r));return new Q(s,B.empty(),-1)}(r,-1)))})}Fi(e,t){let n=new en(e8(e));return t.forEach((t,r)=>{e6(e,r)&&(n=n.add(r))}),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Mi(e,t){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",e5(t)),this.Ni.getDocumentsMatchingQuery(e,t,Q.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nR{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new Z(x),this.qi=new tR(e=>eM(e),eO),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nv(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}async function nx(e,t){var n;return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.Qi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let s=[],i=[],a=tK();for(let o of r)for(let l of(s.push(o.batchId),o.mutations))a=a.add(l.key);for(let u of t)for(let h of(i.push(u.batchId),u.mutations))a=a.add(h.key);return e.localDocuments.getDocuments(n,a).next(e=>({ji:e,removedBatchIds:s,addedBatchIds:i}))})})}function nV(e){var t;return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function nM(e,t){var n;return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}async function nO(e,t,n){var r;let s=e,i=s.Ui.get(t);try{n||await s.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>s.persistence.referenceDelegate.removeTarget(e,i))}catch(a){if(!H(a))throw a;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}s.Ui=s.Ui.remove(t),s.qi.delete(i.target)}function nU(e,t,n){var r;let s=O.min(),i=tK();return e.persistence.runTransaction("Execute query","readonly",r=>(function(e,t,n){var r;let s=e.qi.get(n);return void 0!==s?$.resolve(e.Ui.get(s)):e.Cs.getTargetData(t,n)})(e,r,e2(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(r,t.targetId).next(e=>{i=e})}).next(()=>e.Li.getDocumentsMatchingQuery(r,t,n?s:O.min(),n?i:tK())).next(n=>{var r,s,a,o;let l;return s=e,a=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),o=n,l=s.Ki.get(a)||O.min(),o.forEach((e,t)=>{t.readTime.compareTo(l)>0&&(l=t.readTime)}),s.Ki.set(a,l),{documents:n,Hi:i}}))}class nF{constructor(){this.activeTargetIds=tQ}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nP{constructor(){this.Lr=new nF,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new nF,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nq{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nB{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nK={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nQ{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nz extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,s){let i=this.ho(e,t);g("RestConnection","Sending: ",i,n);let a={};return this.lo(a,r,s),this.fo(e,i,a,n).then(e=>(g("RestConnection","Received: ",e),e),t=>{throw y("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t})}_o(e,t,n,r,s,i){return this.ao(e,t,n,r,s)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){let n=nK[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise((s,i)=>{let a=new u.JJ;a.setWithCredentials(!0),a.listenOnce(u.tw.COMPLETE,()=>{var t;try{switch(a.getLastErrorCode()){case u.jK.NO_ERROR:let n=a.getResponseJson();g("Connection","XHR received:",JSON.stringify(n)),s(n);break;case u.jK.TIMEOUT:g("Connection",'RPC "'+e+'" timed out'),i(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let r=a.getStatus();if(g("Connection",'RPC "'+e+'" failed with status:',r,"response text:",a.getResponseText()),r>0){let o=a.getResponseJson();Array.isArray(o)&&(o=o[0]);let l=null===(t=o)||void 0===t?void 0:t.error;if(l&&l.status&&l.message){let h=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(l.status);i(new T(h,l.message))}else i(new T(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else i(new T(E.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{g("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(r);a.send(t,"POST",o,n,15)})}wo(e,t,n){let s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=(0,u.UE)(),a=(0,u.FJ)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new u.zI({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let l=s.join("");g("Connection","Creating WebChannel: "+l,o);let h=i.createWebChannel(l,o),c=!1,d=!1,f=new nQ({Hr(e){d?g("Connection","Not sending because WebChannel is closed:",e):(c||(g("Connection","Opening WebChannel transport."),h.open(),c=!0),g("Connection","WebChannel sending:",e),h.send(e))},Jr:()=>h.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,u.ii.EventType.OPEN,()=>{d||g("Connection","WebChannel transport opened.")}),m(h,u.ii.EventType.CLOSE,()=>{d||(d=!0,g("Connection","WebChannel transport closed"),f.io())}),m(h,u.ii.EventType.ERROR,e=>{d||(d=!0,y("Connection","WebChannel transport errored:",e),f.io(new T(E.UNAVAILABLE,"The operation could not be completed")))}),m(h,u.ii.EventType.MESSAGE,e=>{var t,n;if(!d){let s=e.data[0];(n=!!s)||w();let i=s.error||(null===(t=s[0])||void 0===t?void 0:t.error);if(i){g("Connection","WebChannel received error:",i);let a=i.status,o=function(e){let t=r[e];if(void 0!==t)return tL(t)}(a),l=i.message;void 0===o&&(o=E.INTERNAL,l="Unknown error status: "+a+" with message "+i.message),d=!0,f.io(new T(o,l)),h.close()}else g("Connection","WebChannel received:",s),f.ro(s)}}),m(a,u.ju.STAT_EVENT,e=>{e.stat===u.kN.PROXY?g("Connection","Detected buffering proxy"):e.stat===u.kN.NOPROXY&&g("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function nG(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nj(e){return new t1(e,!0)}class n${constructor(e,t,n=1e3,r=1.5,s=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&g("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nH{constructor(e,t,n,r,s,i,a,o){this.Hs=e,this.vo=n,this.Vo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new n$(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nW extends nH{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.It=s}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,s,i,a;t.targetChange;let o="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:w(),l=t.targetChange.targetIds||[],u=(i=t.targetChange.resumeToken,e.gt?(void 0===i||"string"==typeof i||w(),ei.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||w(),ei.fromUint8Array(i||new Uint8Array))),h=t.targetChange.cause,c=h&&function(e){let t=void 0===e.code?E.UNKNOWN:tL(e.code);return new T(t,e.message||"")}(h);n=new tH(o,l,u,c||null)}else if("documentChange"in t){t.documentChange;let d=t.documentChange;d.document,d.document.name,d.document.updateTime;let f=t8(e,d.document.name),m=t3(d.document.updateTime),g=new eb({mapValue:{fields:d.document.fields}}),p=eR.newFoundDocument(f,m,g),y=d.targetIds||[],v=d.removedTargetIds||[];n=new tj(y,v,p.key,p)}else if("documentDelete"in t){t.documentDelete;let I=t.documentDelete;I.document;let C=t8(e,I.document),S=I.readTime?t3(I.readTime):O.min(),A=eR.newNoDocument(C,S),k=I.removedTargetIds||[];n=new tj([],k,A.key,A)}else if("documentRemove"in t){t.documentRemove;let _=t.documentRemove;_.document;let N=t8(e,_.document),D=_.removedTargetIds||[];n=new tj([],D,N,null)}else{if(!("filter"in t))return w();{t.filter;let b=t.filter;b.targetId;let L=b.count||0,R=new tb(L),x=b.targetId;n=new t$(x,R)}}return n}(this.It,e),n=function(e){if(!("targetChange"in e))return O.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?O.min():t.readTime?t3(t.readTime):O.min()}(e);return this.listener.Wo(t,n)}zo(e){let t={};t.database=ne(this.It),t.addTarget=function(e,t){var n,r;let s,i=t.target;return(s=eU(i)?{documents:{documents:[t7(e,i.path)]}}:{query:function(e,t){var n,r,s,i;let a={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(a.parent=t7(e,o),a.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(a.parent=t7(e,o.popLast()),a.structuredQuery.from=[{collectionId:o.lastSegment()}]);let l=function(e){if(0===e.length)return;let t=e.map(e=>(function(e){var t;if("=="===e.op){if(ek(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NAN"}};if(eA(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ek(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NOT_NAN"}};if(eA(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nr(e.field),op:(t=e.op,t0[t]),value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);l&&(a.structuredQuery.where=l);let u=function(e){if(0!==e.length)return e.map(e=>{var t,n;return{field:nr(e.field),direction:(n=e.dir,tZ[n])}})}(t.orderBy);u&&(a.structuredQuery.orderBy=u);let h=(s=t.limit,e.gt||em(s)?s:{value:s});return null!==h&&(a.structuredQuery.limit=h),t.startAt&&(a.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(a.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),a}(e,i)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?s.resumeToken=t4(e,t.resumeToken):t.snapshotVersion.compareTo(O.min())>0&&(s.readTime=t2(e,t.snapshotVersion.toTimestamp())),s}(this.It,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return w()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){let t={};t.database=ne(this.It),t.removeTarget=e,this.Bo(t)}}class nY extends nH{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,n,r,s;if(!e.streamToken&&w(),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();let i=(n=e.writeResults,r=e.commitTime,n&&n.length>0?(void 0!==r||w(),n.map(e=>{var t,n;let s;return n=r,(s=e.updateTime?t3(e.updateTime):t3(n)).isEqual(O.min())&&(s=t3(n)),new tm(s,e.transformResults||[])})):[]),a=t3(e.commitTime);return this.listener.Zo(a,i)}return e.writeResults&&0!==e.writeResults.length&&w(),this.Jo=!0,this.listener.tu()}eu(){let e={};e.database=ne(this.It),this.Bo(e)}Xo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n,r,s,i;let a;if(t instanceof tC)a={update:nn(e,t.key,t.value)};else if(t instanceof tN)a={delete:t6(e,t.key)};else if(t instanceof tS)a={update:nn(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tD))return w();a={verify:t6(e,t.key)}}return t.fieldTransforms.length>0&&(a.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof ta)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof to)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tu)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tc)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw w()})(0,e))),t.precondition.isNone||(a.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:t2(e,(i=r.updateTime).toTimestamp())}:void 0!==r.exists?{exists:r.exists}:w()),a})(this.It,e))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nX extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.ao(e,t,n,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection._o(e,t,n,s,i,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class nJ{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(p(t),this.ou=!1):g("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nZ{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(e=>{n.enqueueAndForget(async()=>{n8(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){var t;e._u.add(4),await n1(e),e.gu.set("Unknown"),e._u.delete(4),await n0(e)}(this))})}),this.gu=new nJ(n,r)}}async function n0(e){if(n8(e))for(let t of e.wu)await t(!0)}async function n1(e){for(let t of e.wu)await t(!1)}function n2(e,t){var n;e.du.has(t.targetId)||(e.du.set(t.targetId,t),n6(e)?n5(e):rp(e).ko()&&n3(e,t))}function n4(e,t){var n;let r=rp(e);e.du.delete(t),r.ko()&&n9(e,t),0===e.du.size&&(r.ko()?r.Fo():n8(e)&&e.gu.set("Unknown"))}function n3(e,t){e.yu.Mt(t.targetId),rp(e).zo(t)}function n9(e,t){e.yu.Mt(t),rp(e).Ho(t)}function n5(e){e.yu=new tY({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),rp(e).start(),e.gu.uu()}function n6(e){return n8(e)&&!rp(e).No()&&e.du.size>0}function n8(e){var t;return 0===e._u.size}function n7(e){e.yu=void 0}async function re(e){e.du.forEach((t,n)=>{n3(e,t)})}async function rt(e,t){n7(e),n6(e)?(e.gu.hu(t),n5(e)):e.gu.set("Unknown")}async function rn(e,t,n){if(e.gu.set("Online"),t instanceof tH&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await rr(e,r)}else if(t instanceof tj?e.yu.Gt(t):t instanceof t$?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(O.min()))try{let s=await nV(e.localStore);n.compareTo(s)>=0&&await function(e,t){let n=e.yu.te(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let s=e.du.get(r);s&&e.du.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(ei.EMPTY_BYTE_STRING,n.snapshotVersion)),n9(e,t);let r=new nu(n.target,t,1,n.sequenceNumber);n3(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){g("RemoteStore","Failed to raise snapshot:",i),await rr(e,i)}}async function rr(e,t,n){if(!H(t))throw t;e._u.add(1),await n1(e),e.gu.set("Offline"),n||(n=()=>nV(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await n0(e)})}function rs(e,t){return t().catch(n=>rr(e,n,t))}async function ri(e){var t;let n=ry(e),r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;ra(e);)try{let s=await nM(e.localStore,r);if(null===s){0===e.fu.length&&n.Fo();break}r=s.batchId,ro(e,s)}catch(i){await rr(e,i)}rl(e)&&ru(e)}function ra(e){return n8(e)&&e.fu.length<10}function ro(e,t){e.fu.push(t);let n=ry(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function rl(e){return n8(e)&&!ry(e).No()&&e.fu.length>0}function ru(e){ry(e).start()}async function rh(e){ry(e).eu()}async function rc(e){let t=ry(e);for(let n of e.fu)t.Xo(n.mutations)}async function rd(e,t,n){let r=e.fu.shift(),s=no.from(r,t,n);await rs(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await ri(e)}async function rf(e,t){t&&ry(e).Yo&&await async function(e,t){var n;if(function(e){switch(e){default:return w();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}(n=t.code)&&n!==E.ABORTED){let r=e.fu.shift();ry(e).Mo(),await rs(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await ri(e)}}(e,t),rl(e)&&ru(e)}async function rm(e,t){var n;e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let r=n8(e);e._u.add(3),await n1(e),r&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await n0(e)}async function rg(e,t){var n;t?(e._u.delete(2),await n0(e)):t||(e._u.add(2),await n1(e),e.gu.set("Unknown"))}function rp(e){return e.pu||(e.pu=function(e,t,n){var r;return e.su(),new nW(t,e.connection,e.authCredentials,e.appCheckCredentials,e.It,n)}(e.datastore,e.asyncQueue,{Yr:re.bind(null,e),Zr:rt.bind(null,e),Wo:rn.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),n6(e)?n5(e):e.gu.set("Unknown")):(await e.pu.stop(),n7(e))})),e.pu}function ry(e){return e.Iu||(e.Iu=function(e,t,n){var r;return e.su(),new nY(t,e.connection,e.authCredentials,e.appCheckCredentials,e.It,n)}(e.datastore,e.asyncQueue,{Yr:rh.bind(null,e),Zr:rf.bind(null,e),tu:rc.bind(null,e),Zo:rd.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await ri(e)):(await e.Iu.stop(),e.fu.length>0&&(g("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rv{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,s){let i=Date.now()+n,a=new rv(e,t,i,r,s);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rw(e,t){if(p("AsyncQueue",`${t}: ${e}`),H(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rE{constructor(e){this.comparator=e?(t,n)=>e(t,n)||B.comparator(t.key,n.key):(e,t)=>B.comparator(e.key,t.key),this.keyedMap=tM(),this.sortedSet=new Z(this.comparator)}static emptySet(e){return new rE(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rE)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let r=t.getNext().key,s=n.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new rE;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rT{constructor(){this.Tu=new Z(B.comparator)}track(e){let t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):w():this.Tu=this.Tu.insert(t,e)}Eu(){let e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class rI{constructor(e,t,n,r,s,i,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,s){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new rI(e,t,rE.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e3(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rC{constructor(){this.Au=void 0,this.listeners=[]}}class rS{constructor(){this.queries=new tR(e=>e9(e),e3),this.onlineState="Unknown",this.Ru=new Set}}async function rA(e,t){var n;let r=t.query,s=!1,i=e.queries.get(r);if(i||(s=!0,i=new rC),s)try{i.Au=await e.onListen(r)}catch(o){let a=rw(o,`Initialization of query '${e5(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,i),i.listeners.push(t),t.bu(e.onlineState),i.Au&&t.Pu(i.Au)&&rD(e)}async function rk(e,t){var n;let r=t.query,s=!1,i=e.queries.get(r);if(i){let a=i.listeners.indexOf(t);a>=0&&(i.listeners.splice(a,1),s=0===i.listeners.length)}if(s)return e.queries.delete(r),e.onUnlisten(r)}function r_(e,t){var n;let r=!1;for(let s of t){let i=s.query,a=e.queries.get(i);if(a){for(let o of a.listeners)o.Pu(s)&&(r=!0);a.Au=s}}r&&rD(e)}function rN(e,t,n){var r;let s=e.queries.get(t);if(s)for(let i of s.listeners)i.onError(n);e.queries.delete(t)}function rD(e){e.Ru.forEach(e=>{e.next()})}class rb{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new rI(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),r=!0):this.Cu(e,this.onlineState)&&(this.xu(e),r=!0),this.Su=e,r}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){return!e.fromCache||(!this.options.Nu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;let t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=rI.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rL{constructor(e){this.key=e}}class rR{constructor(e){this.key=e}}class rx{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=tK(),this.mutatedKeys=tK(),this.Gu=e8(e),this.Qu=new rE(this.Gu)}get ju(){return this.Uu}Wu(e,t){let n=t?t.zu:new rT,r=t?t.Qu:this.Qu,s=t?t.mutatedKeys:this.mutatedKeys,i=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=e6(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Gu(h,o)>0||l&&0>this.Gu(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){let u="F"===this.query.limitType?i.last():i.first();i=i.delete(u.key),s=s.delete(u.key),n.track({type:1,doc:u})}return{Qu:i,zu:n,$i:a,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;let s=e.zu.Eu();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return n(e)-n(t)})(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);let i=t?this.Yu():[],a=0===this.Ku.size&&this.current?1:0,o=a!==this.qu;return(this.qu=a,0!==s.length||o)?{snapshot:new rI(this.query,e.Qu,r,s,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new rT,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.Uu=this.Uu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Uu=this.Uu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];let e=this.Ku;this.Ku=tK(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});let t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new rR(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new rL(n))}),t}tc(e){this.Uu=e.Hi,this.Ku=tK();let t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return rI.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class rV{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rM{constructor(e){this.key=e,this.nc=!1}}class rO{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new tR(e=>e9(e),e3),this.rc=new Map,this.oc=new Set,this.uc=new Z(B.comparator),this.cc=new Map,this.ac=new nT,this.hc={},this.lc=new Map,this.fc=ng.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function rU(e,t){let n=function(e){var t;let n=e;return n.remoteStore.remoteSyncer.applyRemoteEvent=rB.bind(null,n),n.remoteStore.remoteSyncer.getRemoteKeysForTarget=r1.bind(null,n),n.remoteStore.remoteSyncer.rejectListen=rQ.bind(null,n),n.sc.Wo=r_.bind(null,n.eventManager),n.sc.wc=rN.bind(null,n.eventManager),n}(e),r,s,i=n.ic.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{let a=await function(e,t){var n;let r=e;return r.persistence.runTransaction("Allocate target","readwrite",e=>{let n;return r.Cs.getTargetData(e,t).next(s=>s?(n=s,$.resolve(n)):r.Cs.allocateTargetId(e).next(s=>(n=new nu(t,s,0,e.currentSequenceNumber),r.Cs.addTargetData(e,n).next(()=>n))))}).then(e=>{let n=r.Ui.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(r.Ui=r.Ui.insert(e.targetId,e),r.qi.set(t,e.targetId)),e})}(n.localStore,e2(t));n.isPrimaryClient&&n2(n.remoteStore,a);let o=n.sharedClientState.addLocalQueryTarget(a.targetId);s=await rF(n,t,r=a.targetId,"current"===o,a.resumeToken)}return s}async function rF(e,t,n,r,s){e._c=(t,n,r)=>(async function(e,t,n,r){let s=t.view.Wu(n);s.$i&&(s=await nU(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,s)));let i=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i);return rY(e,t.targetId,a.Xu),a.snapshot})(e,t,n,r);let i=await nU(e.localStore,t,!0),a=new rx(t,i.Hi),o=a.Wu(i.documents),l=tG.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),u=a.applyChanges(o,e.isPrimaryClient,l);rY(e,n,u.Xu);let h=new rV(t,n,a);return e.ic.set(t,h),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function rP(e,t){var n;let r=e.ic.get(t),s=e.rc.get(r.targetId);if(s.length>1)return e.rc.set(r.targetId,s.filter(e=>!e3(e,t))),void e.ic.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await nO(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n4(e.remoteStore,r.targetId),rH(e,r.targetId)}).catch(j)):(rH(e,r.targetId),await nO(e.localStore,r.targetId,!0))}async function rq(e,t,n){let r=function(e){var t;let n=e;return n.remoteStore.remoteSyncer.applySuccessfulWrite=rz.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=rG.bind(null,n),n}(e);try{var s,i,a;let o=await function(e,t){var n;let r=M.now(),s=t.reduce((e,t)=>e.add(t.key),tK()),i,a;return e.persistence.runTransaction("Locally write mutations","readwrite",n=>{let o=tx,l=tK();return e.Gi.getEntries(n,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(n,o)).next(s=>{i=s;let a=[];for(let o of t){let l=tT(o,i.get(o.key).overlayedDocument);null!=l&&a.push(new tS(o.key,l,eL(l.value.mapValue),tg.exists(!0)))}return e.mutationQueue.addMutationBatch(n,r,a,t)}).next(t=>{a=t;let r=t.applyToLocalDocumentSet(i,l);return e.documentOverlayCache.saveOverlays(n,t.batchId,r)})}).then(()=>({batchId:a.batchId,changes:tO(i)}))}(r.localStore,t),l;r.sharedClientState.addPendingMutation(o.batchId),s=r,i=o.batchId,(l=s.hc[s.currentUser.toKey()])||(l=new Z(x)),l=l.insert(i,n),s.hc[s.currentUser.toKey()]=l,await rZ(r,o.changes),await ri(r.remoteStore)}catch(h){let u=rw(h,"Failed to persist write");n.reject(u)}}async function rB(e,t){var n;try{let r=await function(e,t){var n;let r=e,s=t.snapshotVersion,i=r.Ui;return r.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var n,a,o;let l=r.Gi.newChangeBuffer({trackRemovals:!0});i=r.Ui;let u=[];t.targetChanges.forEach((n,a)=>{var o,l,h;let c=i.get(a);if(!c)return;u.push(r.Cs.removeMatchingKeys(e,n.removedDocuments,a).next(()=>r.Cs.addMatchingKeys(e,n.addedDocuments,a)));let d=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?d=d.withResumeToken(ei.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):n.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(n.resumeToken,s)),i=i.insert(a,d),l=d,(0===c.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)&&u.push(r.Cs.updateTargetData(e,d))});let h=tx,c=tK(),d,f;if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(r.persistence.referenceDelegate.updateLimboDocument(e,n))}),u.push((n=e,a=l,o=t.documentUpdates,d=tK(),f=tK(),o.forEach(e=>d=d.add(e)),a.getEntries(n,d).next(e=>{let t=tx;return o.forEach((n,r)=>{let s=e.get(n);r.isFoundDocument()!==s.isFoundDocument()&&(f=f.add(n)),r.isNoDocument()&&r.version.isEqual(O.min())?(a.removeEntry(n,r.readTime),t=t.insert(n,r)):!s.isValidDocument()||r.version.compareTo(s.version)>0||0===r.version.compareTo(s.version)&&s.hasPendingWrites?(a.addEntry(r),t=t.insert(n,r)):g("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",r.version)}),{Wi:t,zi:f}})).next(e=>{h=e.Wi,c=e.zi})),!s.isEqual(O.min())){let m=r.Cs.getLastRemoteSnapshotVersion(e).next(t=>r.Cs.setTargetsMetadata(e,e.currentSequenceNumber,s));u.push(m)}return $.waitFor(u).next(()=>l.apply(e)).next(()=>r.localDocuments.getLocalViewOfDocuments(e,h,c)).next(()=>h)}).then(e=>(r.Ui=i,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{var r,s,i;let a=e.cc.get(n);a&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||w(),t.addedDocuments.size>0?a.nc=!0:t.modifiedDocuments.size>0?(s=a.nc)||w():t.removedDocuments.size>0&&(a.nc||w(),a.nc=!1))}),await rZ(e,r,t)}catch(s){await j(s)}}function rK(e,t,n){var r;let s=e;if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){let i=[];s.ic.forEach((e,n)=>{let r=n.view.bu(t);r.snapshot&&i.push(r.snapshot)}),function(e,t){var n;let r=e;r.onlineState=t;let s=!1;r.queries.forEach((e,n)=>{for(let r of n.listeners)r.bu(t)&&(s=!0)}),s&&rD(r)}(s.eventManager,t),i.length&&s.sc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function rQ(e,t,n){var r;let s=e;s.sharedClientState.updateQueryState(t,"rejected",n);let i=s.cc.get(t),a=i&&i.key;if(a){let o=new Z(B.comparator);o=o.insert(a,eR.newNoDocument(a,O.min()));let l=tK().add(a),u=new tz(O.min(),new Map,new en(x),o,l);await rB(s,u),s.uc=s.uc.remove(a),s.cc.delete(t),rJ(s)}else await nO(s.localStore,t,!1).then(()=>rH(s,t,n)).catch(j)}async function rz(e,t){var n;let r=t.batch.batchId;try{let s=await function(e,t){var n;return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{let r=t.batch.keys(),s=e.Gi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let s=n.batch,i=s.keys(),a=$.resolve();return i.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let i=n.docVersions.get(e);null!==i||w(),0>t.version.compareTo(i)&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,s))})(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(e){let t=tK();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}(e.localStore,t);r$(e,r,null),rj(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await rZ(e,s)}catch(i){await j(i)}}async function rG(e,t,n){var r;try{let s=await function(e,t){var n;return e.persistence.runTransaction("Reject batch","readwrite-primary",n=>{let r;return e.mutationQueue.lookupMutationBatch(n,t).next(t=>(null!==t||w(),r=t.keys(),e.mutationQueue.removeMutationBatch(n,t))).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,r)).next(()=>e.localDocuments.getDocuments(n,r))})}(e.localStore,t);r$(e,t,n),rj(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await rZ(e,s)}catch(i){await j(i)}}function rj(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function r$(e,t,n){var r;let s=e,i=s.hc[s.currentUser.toKey()];if(i){let a=i.get(t);a&&(n?a.reject(n):a.resolve(),i=i.remove(t)),s.hc[s.currentUser.toKey()]=i}}function rH(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.rc.get(t)))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||rW(e,t)})}function rW(e,t){e.oc.delete(t.path.canonicalString());let n=e.uc.get(t);null!==n&&(n4(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),rJ(e))}function rY(e,t,n){for(let r of n)r instanceof rL?(e.ac.addReference(r.key,t),rX(e,r)):r instanceof rR?(g("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||rW(e,r.key)):w()}function rX(e,t){let n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(g("SyncEngine","New document in limbo: "+n),e.oc.add(r),rJ(e))}function rJ(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){let t=e.oc.values().next().value;e.oc.delete(t);let n=new B(F.fromString(t)),r=e.fc.next();e.cc.set(r,new rM(n)),e.uc=e.uc.insert(n,r),n2(e.remoteStore,new nu(e2(eZ(n.path)),r,2,W.at))}}async function rZ(e,t,n){var r;let s=[],i=[],a=[];e.ic.isEmpty()||(e.ic.forEach((r,o)=>{a.push(e._c(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);let r=nb.Ci(o.targetId,t);i.push(r)}}))}),await Promise.all(a),e.sc.Wo(s),await async function(e,t){var n;let r=e;try{await r.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>$.forEach(t,t=>$.forEach(t.Si,n=>r.persistence.referenceDelegate.addReference(e,t.targetId,n)).next(()=>$.forEach(t.Di,n=>r.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))}catch(s){if(!H(s))throw s;g("LocalStore","Failed to update sequence numbers: "+s)}for(let i of t){let a=i.targetId;if(!i.fromCache){let o=r.Ui.get(a),l=o.snapshotVersion,u=o.withLastLimboFreeSnapshotVersion(l);r.Ui=r.Ui.insert(a,u)}}}(e.localStore,i))}async function r0(e,t){var n,r,s;let i=e;if(!i.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let a=await nx(i.localStore,t);i.currentUser=t,s="'waitForPendingWrites' promise is rejected due to a user change.",(r=i).lc.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,s))})}),r.lc.clear(),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await rZ(i,a.ji)}}function r1(e,t){var n;let r=e.cc.get(t);if(r&&r.nc)return tK().add(r.key);{let s=tK(),i=e.rc.get(t);if(!i)return s;for(let a of i){let o=e.ic.get(a);s=s.unionWith(o.view.ju)}return s}}class r2{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=nj(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){var t,n,r,s;return t=this.persistence,n=new nL,r=e.initialUser,s=this.It,new nR(t,n,r,s)}yc(e){return new n_(nD.Bs,this.It)}gc(e){return new nP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class r4{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rK(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=r0.bind(null,this.syncEngine),await rg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rS}createDatastore(e){var t,n,r,s,i;let a=nj(e.databaseInfo.databaseId),o=(t=e.databaseInfo,new nz(t));return n=e.authCredentials,r=e.appCheckCredentials,new nX(n,r,o,a)}createRemoteStore(e){var t,n,r,s,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>rK(this.syncEngine,e,0),i=nB.C()?new nB:new nq,new nZ(t,n,r,s,i)}createSyncEngine(e,t){return function(e,t,n,r,s,i,a){let o=new rO(e,t,n,r,s,i);return a&&(o.dc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){var t;g("RemoteStore","RemoteStore shutting down."),e._u.add(5),await n1(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function r3(e,t,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function r9(e){if(!B.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function r5(e){if(B.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function r6(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":w()}function r8(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=r6(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let r7=new Map;class se{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new T(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class st{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new se({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new se(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"gapi":let t=e.client;return new N(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=r7.get(e);t&&(g("ComponentProvider","Removing Datastore"),r7.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sn{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class sr{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new sr(this.firestore,e,this._query)}}class ss extends sr{constructor(e,t,n){super(e,t,eZ(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new B(e))}withConverter(e){return new ss(this.firestore,e,this._path)}}function si(e,t,...n){if(e=(0,l.m9)(e),r3("collection","path",t),e instanceof st){let r=F.fromString(t,...n);return r5(r),new ss(e,null,r)}{if(!(e instanceof sn||e instanceof ss))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=e._path.child(F.fromString(t,...n));return r5(s),new ss(e.firestore,null,s)}}function sa(e,t,...n){if(e=(0,l.m9)(e),1===arguments.length&&(t=R.R()),r3("doc","path",t),e instanceof st){let r=F.fromString(t,...n);return r9(r),new sn(e,null,new B(r))}{if(!(e instanceof sn||e instanceof ss))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=e._path.child(F.fromString(t,...n));return r9(s),new sn(e.firestore,e instanceof ss?e.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class so{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):p("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sl{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=c.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=rw(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function su(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await nx(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function sh(e,t){e.asyncQueue.verifyOperationInProgress();let n=await sc(e);g("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>rm(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rm(t.remoteStore,n)),e.onlineComponents=t}async function sc(e){return e.offlineComponents||(g("FirestoreClient","Using default OfflineComponentProvider"),await su(e,new r2)),e.offlineComponents}async function sd(e){return e.onlineComponents||(g("FirestoreClient","Using default OnlineComponentProvider"),await sh(e,new r4)),e.onlineComponents}async function sf(e){let t=await sd(e),n=t.eventManager;return n.onListen=rU.bind(null,t.syncEngine),n.onUnlisten=rP.bind(null,t.syncEngine),n}class sm{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new n$(this,"async_queue_retry"),this.Wc=()=>{let e=nG();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=nG();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;let t=nG();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});let t=new I;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!H(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{var t;this.Kc=e,this.Gc=!1;let n,r=(n=e.message||"",e.stack&&(n=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),n);throw p("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let r=rv.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.qc.push(r),r}zc(){this.Kc&&w()}verifyOperationInProgress(){}async Xc(){let e;do await (e=this.Bc);while(e!==this.Bc)}Zc(e){for(let t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.qc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.qc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.qc.indexOf(e);this.qc.splice(t,1)}}class sg extends st{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sm,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sv(this),this._firestoreClient.terminate()}}function sp(e,t){let n="object"==typeof e?e:(0,i.Mq)(),r=(0,i.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let s=(0,l.P0)("firestore");s&&function(e,t,n,r={}){var s;let i=(e=r8(e,st))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&y("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let a,o;if("string"==typeof r.mockUserToken)a=r.mockUserToken,o=c.MOCK_USER;else{a=(0,l.Sg)(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);let u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new c(u)}e._authCredentials=new A(new C(a,o))}}(r,...s)}return r}function sy(e){return e._firestoreClient||sv(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function sv(e){var t,n,r,s,i;let a=e._freezeSettings(),o=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",s=e._persistenceKey,new ed(n,r,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new sl(e._authCredentials,e._appCheckCredentials,e._queue,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sw{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sw(ei.fromBase64String(e))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sw(ei.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sE{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sI{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let sC=/^__.*__$/;class sS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new tS(e,this.data,this.fieldMask,t,this.fieldTransforms):new tC(e,this.data,t,this.fieldTransforms)}}function sA(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class sk{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new sk(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return sM(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(sA(this.sa)&&sC.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class s_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||nj(e)}da(e,t,n,r=!1){return new sk({sa:e,methodName:t,fa:n,path:q.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function sN(e,t){if(sb(e=(0,l.m9)(e)))return sL("Unsupported field value:",t,e),sD(e,t);if(e instanceof sT)return function(e,t){if(!sA(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let s of e){let i=sN(s,t.aa(r));null==i&&(i={nullValue:"NULL_VALUE"}),n.push(i),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,s;return n=t.It,"number"==typeof(r=e)&&Number.isInteger(r)&&!eg(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER?tt(r):te(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let i=M.fromDate(e);return{timestampValue:t2(t.It,i)}}if(e instanceof M){let a=new M(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:t2(t.It,a)}}if(e instanceof sI)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sw)return{bytesValue:t4(t.It,e._byteString)};if(e instanceof sn){let o=t.databaseId,u=e.firestore._databaseId;if(!u.isEqual(o))throw t.ha(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:t9(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${r6(e)}`)}(e,t)}function sD(e,t){let n={};return J(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):X(e,(e,r)=>{let s=sN(r,t.ra(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function sb(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof M||e instanceof sI||e instanceof sw||e instanceof sn||e instanceof sT)}function sL(e,t,n){var r;if(!sb(n)||"object"!=typeof n||null===n||Object.getPrototypeOf(n)!==Object.prototype&&null!==Object.getPrototypeOf(n)){let s=r6(n);throw"an object"===s?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function sR(e,t,n){if((t=(0,l.m9)(t))instanceof sE)return t._internalPath;if("string"==typeof t)return sV(e,t);throw sM("Field path arguments must be of type string or ",e,!1,void 0,n)}let sx=RegExp("[~\\*/\\[\\]]");function sV(e,t,n){if(t.search(sx)>=0)throw sM(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sE(...t.split("."))._internalPath}catch(r){throw sM(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sM(e,t,n,r,s){let i=r&&!r.isEmpty(),a=void 0!==s,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}function sO(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sU{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sP("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sF extends sU{data(){return super.data()}}function sP(e,t){return"string"==typeof t?sV(e,t):t instanceof sE?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sq{convertValue(e,t="none"){switch(ey(e)){case 0:return null;case 1:return e.booleanValue;case 2:return el(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw w()}}convertObject(e,t){let n={};return X(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new sI(el(e.latitude),el(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return eh(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ec(e));default:return null}}convertTimestamp(e){let t=eo(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){var n;let r=F.fromString(e);(n=ni(r))||w();let s=new ef(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sB{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sK extends sU{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new sQ(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(sP("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class sQ extends sK{data(e={}){return super.data(e)}}class sz{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new sB(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new sQ(this._firestore,this._userDataWriter,n.key,n,new sB(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let n=0;return e._snapshot.docChanges.map(t=>{let r=new sQ(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sB(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:r,oldIndex:-1,newIndex:n++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new sQ(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sB(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),s=-1,i=-1;return 0!==t.type&&(s=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(i=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}(t.type),doc:n,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sG(e){e=r8(e,sn);let t=r8(e.firestore,sg);return(function(e,t,n={}){let r=new I;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,s){let i=new so({next(i){t.enqueueAndForget(()=>rk(e,a));let o=i.docs.has(n);!o&&i.fromCache?s.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&i.fromCache&&r&&"server"===r.source?s.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),a=new rb(eZ(n.path),i,{includeMetadataChanges:!0,Nu:!0});return rA(e,a)})(await sf(e),e.asyncQueue,t,n,r)),r.promise})(sy(t),e._key).then(n=>(function(e,t,n){let r=n.docs.get(t._key),s=new sj(e);return new sK(e,s,t._key,r,new sB(n.hasPendingWrites,n.fromCache),t.converter)})(t,e,n))}class sj extends sq{constructor(e){super(),this.firestore=e}convertBytes(e){return new sw(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,t)}}function s$(e){e=r8(e,sr);let t=r8(e.firestore,sg),n=sy(t),r=new sj(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new I;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,s){let i=new so({next(n){t.enqueueAndForget(()=>rk(e,a)),n.fromCache&&"server"===r.source?s.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),a=new rb(n,i,{includeMetadataChanges:!0,Nu:!0});return rA(e,a)})(await sf(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new sz(t,r,e,n)))}function sH(e,t,n){var r,s,i,a,o;e=r8(e,sn);let l=r8(e.firestore,sg),u=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return a=l,o=[(function(e,t,n,r,s,i={}){let a=e.da(i.merge||i.mergeFields?2:0,t,n,s);sL("Data must be an object, but it was:",a,r);let o=sD(r,a),l,u;if(i.merge)l=new es(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){let h=[];for(let c of i.mergeFields){let d=sR(t,c,n);if(!a.contains(d))throw new T(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);sO(h,d)||h.push(d)}l=new es(h),u=a.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,u=a.fieldTransforms;return new sS(new eb(o),l,u)})(function(e){let t=e._freezeSettings(),n=nj(e._databaseId);return new s_(e._databaseId,!!t.ignoreUndefinedProperties,n)}(l),"setDoc",e._key,u,null!==e.converter,n).toMutation(e._key,tg.none())],function(e,t){let n=new I;return e.asyncQueue.enqueueAndForget(async()=>{var r;return rq(await sd(e).then(e=>e.syncEngine),t,n)}),n.promise}(sy(a),o)}!function(e,t=!0){var n;d=i.Jn,(0,i.Xd)(new a.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let s=e.getProvider("app").getImmediate(),i=new sg(new k(e.getProvider("auth-internal")),new b(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ef(e.options.projectId,t)}(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(h,"3.7.3",void 0),(0,i.KN)(h,"3.7.3","esm2017")}()}}]);