angular.module('tink.core').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/modal.html',
    "<h1>How does the internet work?</h1> <hr> <div class=row> <div class=\"col-xs-8 text-right\"> <h5>Hier is een datepicker:</h5> </div> <div class=col-xs-4> <data-tink-datepicker data-ng-model=selectedDate1></data-tink-datepicker> </div> </div> <p>Even though the Internet is still a young technology, it's hard to imagine life without it now. Every year, engineers create more devices to integrate with the Internet. This network of networks crisscrosses the globe and even extends into space. But what makes it work?</p> <p>To understand the Internet, it helps to look at it as a system with two main components. The first of those components is <strong>hardware</strong>. That includes everything from the cables that carry terabits of information every second to the computer sitting in front of you.</p> <p>Other types of hardware that support the Internet include routers, servers, cell phone towers, satellites, radios, smartphones and other devices. All these devices together create the network of networks. The Internet is a malleable system -- it changes in little ways as elements join and leave networks around the world. Some of those elements may stay fairly static and make up the backbone of the Internet. Others are more peripheral.</p> <p>These elements are connections. Some are end points -- the computer, smartphone or other device you're using to read this may count as one. We call those end points <strong>clients</strong>. Machines that store the information we seek on the Internet are <strong>servers</strong>. Other elements are <strong>nodes</strong> which serve as a connecting point along a route of traffic. And then there are the transmission lines which can be physical, as in the case of cables and fiber optics, or they can be wireless signals from satellites, cell phone or 4G towers, or radios.</p> <p>All of this hardware wouldn't create a network without the second component of the Internet: the protocols. <strong>Protocols</strong> are sets of rules that machines follow to complete tasks. Without a common set of protocols that all machines connected to the Internet must follow, communication between devices couldn't happen. The various machines would be unable to understand one another or even send information in a meaningful way. The protocols provide both the method and a common language for machines to use to transmit data</p> <hr> <button data-ng-click=cancel()>Cancel</button>\n" +
    "<button data-ng-click=ok()>OK</button>"
  );


  $templateCache.put('templates/popover.html',
    "<header class=popover-header> <img class=\"popover-header-avatar img-circle\" alt=Placeholder src=\"images/digipolis-logo.svg\"> <h1 class=\"popover-header-title tink-text-gray\">Tink Popover</h1> </header> <ul class=popover-list-buttons> <li> <a href=\"\"><span>Fashion fades</span></a> </li> <li> <a href=\"\"><span>Only style remains the same</span></a> </li> </ul>"
  );

}]);
