import React from 'react'
import { Link } from 'react-router-dom'
function Patient() {
  return (
    <>
         
    
        <div class='container-full'>
          
          <div class='content-header'>
              <div class='d-flex align-items-center'>
                  <div class='me-auto'>
                      <h4 class='page-title'>Patient Details</h4>
                      <div class='d-inline-block align-items-center'>
                          <nav>
                              <ol class='breadcrumb'>
                                  <li class='breadcrumb-item'><a href='#'><i class='mdi mdi-home-outline'></i></a></li>
                                  <li class='breadcrumb-item active' aria-current='page'>Patient Details</li>
                              </ol>
                          </nav>
                      </div>
                  </div>
                  
              </div>
          </div>  
  
          
          <section class='content'>
  
              <div class='row'>
                  <div class='col-xl-8 col-12'>
                      <div class='d-md-flex align-items-center justify-content-between mb-20'>						
                          <Link to='/edit-user' class='btn btn-primary me-5 mb-md-0 mb-5'><i class='fa fa-edit'></i> Edit Profile</Link>
                          <div class='d-flex'>
                              <a href='javascript:void(0);' class='btn btn-outline btn-danger me-5'><i class='fa fa-times-circle-o'></i> Reject Patient</a>
                              <a href='javascript:void(0);' class='btn btn-success'><i class='fa fa-check-circle-o'></i> Accept Patient</a>
                          </div>
                      </div>
                      <div class='box'>
                          <div class='box-body text-end min-h-150' style={{backgroundImage:'url(../images/gallery/landscape14.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundsize: 'cover'}}>	
                          </div>						
                          <div class='box-body wed-up position-relative'>
                              <div class='d-md-flex align-items-center'>
                                  <div class=' me-20 text-center text-md-start'>
                                      <img src='../images/avatar/2.jpg' class='bg-success-light rounded10' alt='' />										
                                      <div class='text-center my-10'>
                                          <p class='mb-0'>Disease</p>
                                          <h4>Cold & Flu</h4>
                                      </div>
                                  </div>
                                  <div class='mt-40'>
                                      <h4 class='fw-600 mb-5'>Mical Doe</h4>
                                      <h5 class='fw-500 mb-5'>#p- 12458796</h5>
                                      <p><i class='fa fa-clock-o'></i> Admin on 15 May 2021, 10:00 AM</p>
                                  </div>
                              </div>
                          </div>						
                          <div class='box-body pt-0'>
                              <h4>Story About Disease</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                          </div>
                      </div>
                      <div class='row'>
                          <div class='col-xl-6 col-12'>
                              <div class='box'>
                                  <div class='box-body box-profile'>            
                                    <div class='row'>
                                      <div class='col-12'>
                                          <div>
                                              <p>Email :<span class='text-gray ps-10'>David@yahoo.com</span> </p>
                                              <p>Phone :<span class='text-gray ps-10'>+11 123 456 7890</span></p>
                                              <p>Address :<span class='text-gray ps-10'>123, Lorem Ipsum, Florida, USA</span></p>
                                          </div>
                                      </div>
                                      <div class='col-12'>
                                          <div class='pb-15'>						
                                              <p class='mb-10'>Social Profile</p>
                                              <div class='user-social-acount'>
                                                  <button class='btn btn-circle btn-social-icon btn-facebook'><i class='fa fa-facebook'></i></button>
                                                  <button class='btn btn-circle btn-social-icon btn-twitter'><i class='fa fa-twitter'></i></button>
                                                  <button class='btn btn-circle btn-social-icon btn-instagram'><i class='fa fa-instagram'></i></button>
                                              </div>
                                          </div>
                                      </div>
                                      <div class='col-12'>
                                          <div>
                                              <div class='map-box'>
                                                  <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805244.1745767146!2d-86.32675167439648!3d29.383165774894163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C+USA!5e0!3m2!1sen!2sin!4v1501665415329' width='100%' height='175' frameborder='0' style={{border:'0'}} allowfullscreen></iframe>
                                              </div>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>
                          </div>
                          <div class='col-xl-6 col-12'>
                              <div class='box'>
                                  <div class='box-header border-0 pb-0'>
                                      <h4 class='box-title'>Disease History</h4>
                                  </div>
                                  <div class='box-body'>
                                      <div class='widget-timeline-icon'>
                                          <ul>
                                              <li>
                                                  <div class='icon bg-primary fa fa-heart-o'></div>
                                                  <a class='timeline-panel text-muted' href='#'>
                                                      <h4 class='mb-2 mt-1'>Diabetes</h4>
                                                      <p class='fs-15 mb-0 '>mon, 18 Mar 2021, 11:15 AM</p>
                                                  </a>
                                              </li>
                                              <li>
                                                  <div class='icon bg-primary fa fa-heart-o'></div>
                                                  <a class='timeline-panel text-muted' href='#'>
                                                      <h4 class='mb-2 mt-1'>Sleep Problem</h4>
                                                      <p class='fs-15 mb-0 '>Tue, 21 Jun 2020, 03:22 PM</p>
                                                  </a>
                                              </li>
                                              <li>
                                                  <div class='icon bg-primary fa fa-heart-o'></div>
                                                  <a class='timeline-panel text-muted' href='#'>
                                                      <h4 class='mb-2 mt-1'>Dental Care</h4>
                                                      <p class='fs-15 mb-0 '>Wed, 15 Mar 2020, 02:11 PM</p>
                                                  </a>
                                              </li>
                                              <li>
                                                  <div class='icon bg-primary fa fa-heart-o'></div>
                                                  <a class='timeline-panel text-muted' href='#'>
                                                      <h4 class='mb-2 mt-1'>Diabetes</h4>
                                                      <p class='fs-15 mb-0 '>Sun, 11 Jan 2020, 12:24 PM</p>
                                                  </a>
                                              </li>
                                          </ul>	
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>					
                  </div>
                  <div class='col-xl-4 col-12'>
                      <div class='box'>
                          <div class='box-header'>
                              <h4 class='box-title'>Assigned Doctor</h4>
                          </div>
                          <div class='box-body'>
                              <div class='d-flex align-items-center'>
                                  <img src='../images/avatar/avatar-10.png' class='w-100 bg-primary-light rounded10 me-15' alt='' />
                                  <div>
                                      <h4 class='mb-0'>Dr. Johen Doe</h4>
                                      <p class='text-muted'>Physician</p>
                                      <div class='d-flex'>
                                        <i class='text-warning fa fa-star'></i>
                                        <i class='text-warning fa fa-star'></i>
                                        <i class='text-warning fa fa-star'></i>
                                        <i class='text-warning fa fa-star'></i>
                                        <i class='text-warning fa fa-star-half'></i>
                                      </div>
                                  </div>
                              </div>
                              <div class='d-flex justify-content-between mt-15'>
                                  <a href='javascript:void(0);' class='btn btn-danger-light me-4'>Unassign</a>
                                  <a href='javascript:void(0);' class='btn btn-success-light '>Check</a>
                              </div>
                          </div>
                      </div>
                      <div class='box'>
                          <div class='box-header'>
                            <h4 class='box-title'>Current Vitals</h4>
                            <div class='box-controls pull-right'>
                              <div class='lookup lookup-circle lookup-right'>
                                <input type='text' name='s' placeholder='Patients id'/>
                              </div>
                            </div>
                          </div>
                          <div class='box-body'>
                            <div class='flexbox bb-1 mb-15'>
                              <div><p><span class='text-mute'>Patient Name:</span> <strong>Jonsahn</strong></p></div>
                              <div><p><span class='text-mute'>Patient Id:</span> <strong>1254896</strong></p></div>
                            </div>	
                            <div class='row'>						
                              <div class='col-12'>
                                  <div class='row bb-1 pb-10'>							
                                      <div class='col-4'>							  
                                          <img class='img-fluid float-start w-30 mt-10 me-10' src='../images/weight.png' alt=''/>
                                          <div>
                                              <p class='mb-0'><small>Weight</small></p> 
                                              <h5 class='mb-0'><strong>230 ibs</strong></h5>
                                          </div>
                                      </div>							
                                      <div class='col-4 bs-1 be-1'>							  
                                          <img class='img-fluid float-start w-30 mt-10 me-10' src='../images/human.png' alt=''/>
                                          <div>
                                              <p class='mb-0'><small>Height</small></p> 
                                              <h5 class=' mb-0'><strong>6’1</strong></h5>
                                          </div>
                                      </div>							
                                      <div class='col-4'>							  
                                          <img class='img-fluid float-start w-30 mt-10 me-10' src='../images/bmi.png' alt=''/>
                                          <div>
                                              <p class='mb-0'><small>BMI</small></p> 
                                              <h5 class='mb-0'><strong>30.34</strong></h5>
                                          </div>
                                      </div>
                                  </div>
                                  <div class='row pt-5'>
                                      <div class='col-12'>
                                          <span class='text-danger'>Blood Pressure</span>
                                      </div>
                                      <div class='col-6'>
                                          <div class='progress progress-xs mb-0 mt-5 w-40'>
                                              <div class='progress-bar progress-bar-success progress-bar-striped' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '100%'}}>
                                              </div>
                                          </div>
                                          <h2 class='float-start mt-0 mr-10'><strong>150</strong></h2>
                                          <div>
                                              <p class='mb-0'><small>Systolic</small></p> 
                                              <p class='mb-0 mt-0'><small class='vertical-align-super'>mmHg</small></p>
                                          </div>
                                      </div>							
                                      <div class='col-6 bl-1'>	
                                          <div class='progress progress-xs mb-0 mt-5 w-40'>
                                              <div class='progress-bar progress-bar-success progress-bar-striped' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '100%'}}>
                                              </div>
                                          </div>						  
                                          <h2 class='float-start mt-0 mr-10'><strong>90</strong></h2>
                                          <div>
                                              <p class='mb-0'><small>Diastolic</small></p> 
                                              <p class='mb-0 mt-0'><small class='vertical-align-super'>mmHg</small></p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        <div class='box-body pt-0'>
                          <p><small>Recorded on 25/05/2018</small></p>
                        </div>
                        <div class='box-body bg-danger'>
                            <img src='../images/smoking.png' alt='' class='float-start me-10'/>
                            <p>Smoking Status : current every day smoker</p>
                        </div>
                      </div>	
                      <div class='box'>		
                          <div class='box-header no-border'>
                              <h4 class='box-title'>Patient Statistic</h4>
                          </div>
                          <div class='box-body'>	
                              <div id='chart123'></div>
                          </div>																		
                      </div>				
                      
                  </div>
              </div>
  
          </section>
      
        </div>

   
   
  
   
    <div class='control-sidebar-bg'></div>

  
      <div class='sticky-toolbar'>	    
          <a href='#' data-bs-toggle='tooltip' data-bs-placement='left' title='Buy Now' class='waves-effect waves-light btn btn-success btn-flat mb-5 btn-sm' target='_blank'>
              <span class='icon-Money'><span class='path1'></span><span class='path2'></span></span>
          </a>
          <a href='#' data-bs-toggle='tooltip' data-bs-placement='left' title='Portfolio' class='waves-effect waves-light btn btn-danger btn-flat mb-5 btn-sm' target='_blank'>
              <span class='icon-Image'></span>
          </a>
          <a id='chat-popup' href='#' data-bs-toggle='tooltip' data-bs-placement='left' title='Live Chat' class='waves-effect waves-light btn btn-warning btn-flat btn-sm'>
              <span class='icon-Group-chat'><span class='path1'></span><span class='path2'></span></span>
          </a>
      </div>
  
      
      <div id='chat-box-body'>
          <div id='chat-circle' class='waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70'>
              <div id='chat-overlay'></div>
              <span class='icon-Group-chat fs-30'><span class='path1'></span><span class='path2'></span></span>
          </div>
  
          <div class='chat-box'>
              <div class='chat-box-header p-15 d-flex justify-content-between align-items-center'>
                  <div class='btn-group'>
                    <button class='waves-effect waves-circle btn btn-circle btn-primary-light h-40 w-40 rounded-circle l-h-45' type='button' data-bs-toggle='dropdown'>
                        <span class='icon-Add-user fs-22'><span class='path1'></span><span class='path2'></span></span>
                    </button>
                    <div class='dropdown-menu min-w-200'>
                      <a class='dropdown-item fs-16' href='#'>
                          <span class='icon-Color me-15'></span>
                          New Group</a>
                      <a class='dropdown-item fs-16' href='#'>
                          <span class='icon-Clipboard me-15'><span class='path1'></span><span class='path2'></span><span class='path3'></span><span class='path4'></span></span>
                          Contacts</a>
                      <a class='dropdown-item fs-16' href='#'>
                          <span class='icon-Group me-15'><span class='path1'></span><span class='path2'></span></span>
                          Groups</a>
                      <a class='dropdown-item fs-16' href='#'>
                          <span class='icon-Active-call me-15'><span class='path1'></span><span class='path2'></span></span>
                          Calls</a>
                      <a class='dropdown-item fs-16' href='#'>
                          <span class='icon-Settings1 me-15'><span class='path1'></span><span class='path2'></span></span>
                          Settings</a>
                      <div class='dropdown-divider'></div>
                      <a class='dropdown-item fs-16' href='#'>
                          <span class='icon-Question-circle me-15'><span class='path1'></span><span class='path2'></span></span>
                          Help</a>
                      <a class='dropdown-item fs-16' href='#'>
                          <span class='icon-Notifications me-15'><span class='path1'></span><span class='path2'></span></span> 
                          Privacy</a>
                    </div>
                  </div>
                  <div class='text-center flex-grow-1'>
                      <div class='text-dark fs-18'>Mayra Sibley</div>
                      <div>
                          <span class='badge badge-sm badge-dot badge-primary'></span>
                          <span class='text-muted fs-12'>Active</span>
                      </div>
                  </div>
                  <div class='chat-box-toggle'>
                      <button id='chat-box-toggle' class='waves-effect waves-circle btn btn-circle btn-danger-light h-40 w-40 rounded-circle l-h-45' type='button'>
                        <span class='icon-Close fs-22'><span class='path1'></span><span class='path2'></span></span>
                      </button>                    
                  </div>
              </div>
              <div class='chat-box-body'>
                  <div class='chat-box-overlay'>   
                  </div>
                  <div class='chat-logs'>
                      <div class='chat-msg user'>
                          <div class='d-flex align-items-center'>
                              <span class='msg-avatar'>
                                  <img src='../images/avatar/2.jpg' class='avatar avatar-lg'/>
                              </span>
                              <div class='mx-10'>
                                  <a href='#' class='text-dark hover-primary fw-bold'>Mayra Sibley</a>
                                  <p class='text-muted fs-12 mb-0'>2 Hours</p>
                              </div>
                          </div>
                          <div class='cm-msg-text'>
                              Hi there, I'm Jesse and you?
                          </div>
                      </div>
                      <div class='chat-msg self'>
                          <div class='d-flex align-items-center justify-content-end'>
                              <div class='mx-10'>
                                  <a href='#' class='text-dark hover-primary fw-bold'>You</a>
                                  <p class='text-muted fs-12 mb-0'>3 minutes</p>
                              </div>
                              <span class='msg-avatar'>
                                  <img src='../images/avatar/3.jpg' class='avatar avatar-lg'/>
                              </span>
                          </div>
                          <div class='cm-msg-text'>
                             My name is Anne Clarc.         
                          </div>        
                      </div>
                      <div class='chat-msg user'>
                          <div class='d-flex align-items-center'>
                              <span class='msg-avatar'>
                                  <img src='../images/avatar/2.jpg' class='avatar avatar-lg'/>
                              </span>
                              <div class='mx-10'>
                                  <a href='#' class='text-dark hover-primary fw-bold'>Mayra Sibley</a>
                                  <p class='text-muted fs-12 mb-0'>40 seconds</p>
                              </div>
                          </div>
                          <div class='cm-msg-text'>
                              Nice to meet you Anne.<br/>How can i help you?
                          </div>
                      </div>
                  </div>
                
              </div>
              <div class='chat-input'>      
                  <form>
                      <input type='text' id='chat-input' placeholder='Send a message...'/>
                      <button type='submit' class='chat-submit' id='chat-submit'>
                          <span class='icon-Send fs-22'></span>
                      </button>
                  </form>      
              </div>
          </div>
      </div>
    </>
  )
}

export default Patient