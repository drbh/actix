(function() {var implementors = {};
implementors["actix"] = [{"text":"impl&lt;A, M&gt; <a class=\"trait\" href=\"actix/prelude/trait.Future.html\" title=\"trait actix::prelude::Future\">Future</a> for <a class=\"struct\" href=\"actix/prelude/struct.Request.html\" title=\"struct actix::prelude::Request\">Request</a>&lt;A, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix/prelude/trait.Handler.html\" title=\"trait actix::prelude::Handler\">Handler</a>&lt;M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"actix/prelude/trait.Actor.html#associatedtype.Context\" title=\"type actix::prelude::Actor::Context\">Context</a>: <a class=\"trait\" href=\"actix/dev/trait.ToEnvelope.html\" title=\"trait actix::dev::ToEnvelope\">ToEnvelope</a>&lt;A, M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"actix/prelude/trait.Message.html\" title=\"trait actix::prelude::Message\">Message</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"actix/prelude/trait.Message.html#associatedtype.Result\" title=\"type actix::prelude::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":false,"types":["actix::address::message::Request"]},{"text":"impl&lt;M&gt; <a class=\"trait\" href=\"actix/prelude/trait.Future.html\" title=\"trait actix::prelude::Future\">Future</a> for <a class=\"struct\" href=\"actix/prelude/struct.RecipientRequest.html\" title=\"struct actix::prelude::RecipientRequest\">RecipientRequest</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"actix/prelude/trait.Message.html\" title=\"trait actix::prelude::Message\">Message</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"actix/prelude/trait.Message.html#associatedtype.Result\" title=\"type actix::prelude::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":false,"types":["actix::address::message::RecipientRequest"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"actix/prelude/trait.Future.html\" title=\"trait actix::prelude::Future\">Future</a> for <a class=\"struct\" href=\"actix/fut/struct.Finish.html\" title=\"struct actix::fut::Finish\">Finish</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix/prelude/trait.Stream.html\" title=\"trait actix::prelude::Stream\">Stream</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::helpers::Finish"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()