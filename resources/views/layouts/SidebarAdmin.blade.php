
<div class="iq-sidebar">
            <div class="iq-sidebar-logo d-flex justify-content-between">
               <a href="index.html">
               <img src="images/logo.png" class="img-fluid" alt="">
               <span>MedBook</span>
               </a>
               <div class="iq-menu-bt align-self-center">
                  <div class="wrapper-menu">
                     <div class="line-menu half start"></div>
                     <div class="line-menu"></div>
                     <div class="line-menu half end"></div>
                  </div>
               </div>
            </div>
            <div id="sidebar-scrollbar">
               <nav class="iq-sidebar-menu">
                  <ul class="iq-menu">
                     <li class="iq-menu-title"><i class="ri-separator"></i><span>Main</span></li>
                     <li class="active">
                    <a href="todo.html" class="iq-waves-effect"><i class="ri-home-4-line"></i></i><span>Dashboard</span></a></li>
                     <li>
                           <li><a href="{{ url('gender')}}">Gender</a></li> 
                           <li><a href="{{ url('service')}}">Services</a></li>
                           <li><a href="{{ url('patient')}}">Patient Details</a></li>       
                     </li>
                  </ul>
               </nav>
               <div class="p-3"></div>
            </div>
</div>