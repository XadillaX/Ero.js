Ext.data.JsonP.Errors({"tagname":"class","name":"Errors","autodetected":{},"files":[{"filename":"error.js","href":null}],"singleton":true,"members":[{"name":"BaseError","tagname":"property","owner":"Errors","id":"property-BaseError","meta":{}},{"name":"template","tagname":"property","owner":"Errors","id":"property-template","meta":{}},{"name":"addMeta","tagname":"method","owner":"Errors","id":"method-addMeta","meta":{}},{"name":"defineError","tagname":"method","owner":"Errors","id":"method-defineError","meta":{}},{"name":"init","tagname":"method","owner":"Errors","id":"method-init","meta":{}},{"name":"isCustomError","tagname":"method","owner":"Errors","id":"method-isCustomError","meta":{}},{"name":"isError","tagname":"method","owner":"Errors","id":"method-isError","meta":{}},{"name":"setErrorStackSeparator","tagname":"method","owner":"Errors","id":"method-setErrorStackSeparator","meta":{}},{"name":"setMessageConnector","tagname":"method","owner":"Errors","id":"method-setMessageConnector","meta":{}},{"name":"setTemplate","tagname":"method","owner":"Errors","id":"method-setTemplate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Errors","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>This is a module which exports some APIs, the BaseError class, and your defined Error classes.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-BaseError' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Errors'>Errors</span><br/></div><a href='#!/api/Errors-property-BaseError' class='name expandable'>BaseError</a> : <a href=\"#!/api/BaseError\" rel=\"BaseError\" class=\"docClass\">BaseError</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>The BaseError class</p>\n</div><div class='long'><p>The BaseError class</p>\n</div></div></div><div id='property-template' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Errors'>Errors</span><br/></div><a href='#!/api/Errors-property-template' class='name expandable'>template</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The parsed error template.</p>\n</div><div class='long'><p>The parsed error template.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addMeta' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Errors'>Errors</span><br/></div><a href='#!/api/Errors-method-addMeta' class='name expandable'>addMeta</a>( <span class='pre'>err, meta</span> ) : undefined<span class=\"signature\"></span></div><div class='description'><div class='short'>Assigns own enumerable properties of meta to the err.meta. ...</div><div class='long'><p>Assigns own enumerable properties of meta to the err.meta.</p>\n\n<p>If the err.meta is undefined before assigning, it will be assigned a new object,\nand then the own enumerable properties of second parameter will be assigned to err.meta.\nIf the err.meta is not undefined, it should be a plain object.</p>\n\n<p>The properties of meta will overwrite the properties of err.meta, if they have same name.</p>\n\n<p>@side_effect  err, err.meta</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>err</span> : Error<div class='sub-desc'><p>the instance of Error class or Error subclass</p>\n</div></li><li><span class='pre'>meta</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-defineError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Errors'>Errors</span><br/></div><a href='#!/api/Errors-method-defineError' class='name expandable'>defineError</a>( <span class='pre'>definition, name</span> ) : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Define a subclass of BaseError ...</div><div class='long'><p>Define a subclass of BaseError</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>definition</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of Error Class</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>Error Class</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Errors'>Errors</span><br/></div><a href='#!/api/Errors-method-init' class='name expandable'>init</a>( <span class='pre'>params</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Initialize module. ...</div><div class='long'><p>Initialize module. Set your error template and error definitions.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>template</span> : Object<div class='sub-desc'><p>a template for all error sub-classes</p>\n</div></li><li><span class='pre'>definitions</span> : Object[]<div class='sub-desc'><p>the definitions of error sub-classes</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>a map of Error classes</p>\n</div></li></ul></div></div></div><div id='method-isCustomError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Errors'>Errors</span><br/></div><a href='#!/api/Errors-method-isCustomError' class='name expandable'>isCustomError</a>( <span class='pre'>error</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>To determine whether it is your custom error. ...</div><div class='long'><p>To determine whether it is your custom error.</p>\n\n<p>If the error is an instance of the native Error, return <code>false</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : *<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Errors'>Errors</span><br/></div><a href='#!/api/Errors-method-isError' class='name expandable'>isError</a>( <span class='pre'>error</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>To determine whether it is your custom error. ...</div><div class='long'><p>To determine whether it is your custom error.</p>\n\n<p>If the error is an instance of the native Error, return <code>false</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : *<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setErrorStackSeparator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Errors'>Errors</span><br/></div><a href='#!/api/Errors-method-setErrorStackSeparator' class='name expandable'>setErrorStackSeparator</a>( <span class='pre'>separator</span> ) : undefined<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the separator for multi error stacks. ...</div><div class='long'><p>Set the separator for multi error stacks.</p>\n\n<p>Default to \"\\n==== Pre-Error-Stack ====\\n\"</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>separator</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setMessageConnector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Errors'>Errors</span><br/></div><a href='#!/api/Errors-method-setMessageConnector' class='name expandable'>setMessageConnector</a>( <span class='pre'>connector</span> ) : undefined<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the connector for multi error messages. ...</div><div class='long'><p>Set the connector for multi error messages. Default to \" &amp;&amp; \"</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connector</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Errors'>Errors</span><br/></div><a href='#!/api/Errors-method-setTemplate' class='name expandable'>setTemplate</a>( <span class='pre'>template</span> ) : undefined<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>template</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});