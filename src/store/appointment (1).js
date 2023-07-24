import request from '@/utils/request'

export function list(id) {

  return request({
    url: '/appointments/' + id,
    method: 'get',
  })
}

export function show(data) {

  return request({
    url: '/appointment/show/' + data.id + '/' + data.user_role,
    method: 'get',
  })
}

export function loadIntent(id) {
  return request({
    url: '/get-payment-intent/' + id,
    method: 'get',
  })
}

export function savePaymentDetails(data) {
  return request({
    url: '/update-payment-status',
    method: 'post',
    data
  })
}

export function getAppointmentByUuid(uuid) {
  return request({
    url: '/get-appointment/' + uuid,
    method: 'get',
  })
}

export function joinRoom(data) {
  return request({
    url: '/join-room',
    method: 'post',
    data
  })
}

export function leftRoom(data) {
  return request({
    url: '/left-room',
    method: 'post',
    data
  })
}

export function setReminder(data) {

  return request({
    url: '/send-reminder/' + data.appointment_id,
    method: 'post'
  })
}

export function UpdateMissedCallFlag(data) {
  return request({
    url: '/miss-called-flag/update',
    method: 'post',
    data
  })
}

export function getLiveConference(id) {
  var data = {
    staff_id: id
  }
  return request({
    url: '/get-current-conference-data',
    method: 'post',
    data
  })
}

export function setWaitingTime(data) {
  return request({
    url: '/waiting-time/update',
    method: 'post',
    data
  })
}

export function callStarted(data) {
  return request({
    url: '/is-call-started/update',
    method: 'post',
    data
  })
}
export function getStaffs(data) {
  return request({
    url: 'get-all-staffs/' + data.appointment_id,
    method: 'get',
  })
}
export function addDevice(data) {
  return request({
    url: 'add-device-id',
    method: 'post',
    data
  })
}

export function startDevice(data) {
  return request({
    url: 'start-appointment-device/' + data.id,
    method: 'post',
    data
  })
}

export function startRecording(data) {
  return request({
    url: 'start-reconding/' + data.id,
    method: 'post',
    data
  })
}

export function saveVideo(data) {
  return request({
    url: 'save-recording',
    method: 'post',
    data
  })
}

export function changeRecordingStatus(data) {
  return request({
    url: 'update/recording-status/' + data.id,
    method: 'post',
    data
  })
}

export function stopMeeting(data) {
  return request({
    url: 'stop-meeting-request/' + data.id,
    method: 'post',
    data
  })
}

export function getInMateAppointments(data) {
  return request({
    url: 'get-inmate-appoinments',
    method: 'post',
    data
  })
}


export function getAvailableDates(id) {
  return request({
    url: '/time-selection/' + id,
    method: 'get',
  })
}

export function getConferenceParticipantListing(data) {
  return request({
    url: 'get-conference-participant-listing',
    method: 'post',
    data
  })
}

export function userAvailableUnavalibleEvent(data) {
  return request({
    url: 'user-available-unavailable-event',
    method: 'post',
    data
  })
}

export function getConmpanyInfo(id) {
  return request({
    url: 'find-company/' + id,
    method: 'get',
  })
}

export function saveBlockSlot(data) {
  return request({
    url: 'save-block-slot',
    method: 'post',
    data
  })
}

export function deleteBlockSlot(data) {
  return request({
    url: 'delete-block-slot',
    method: 'post',
    data
  })
}
export function getAllUsers(data) {
  return request({
    url: 'client/get/first_name',
    method: 'get',
    // data
  })
}
// export function getAllUsers(data) {
//   return request({
//     url: 'get-all-users',
//     method: 'get',
//     data
//   })
// }
export function getDepartmentList(data) {
  return request({
    url: 'departments/' + data.id,
    method: 'get',
    data
  })
}
export function getFields(data) {
  return request({
    url: '/get-fields/' + data,
    method: 'get',
  })
}

export function getAppDepartmentList() {
  return request({
    url: 'department-listing',
    method: 'get',
  })
}

export function getDepartmentDuration(data) {
  return request({
    url: 'stop-meeting-using-time',
    method: 'post',
    data
  })
}

export function getRoomsDeviceInfo() {
  return request({
    url: 'get-joined-device',
    method: 'get',
  })
}
export function participateJoin(data) {
  return request({
    url: 'device-joined-event/' + data.appointment_id,
    method: 'get',
  })
}

export function updateWalkinCompletedFlag(data) {
  return request({
    url: 'walkin-completed-flag/update',
    method: 'post',
    data
  })
}

export function getConferenceParticipantList(data) {
  return request({
    url: 'get-staff-user-conference-participant-listing',
    method: 'post',
    data
  })
}

export function saveEventChat(data) {
  return request({
    url: 'save-chat-message',
    method: 'post',
    data
  })
}

export function saveEventChatMessage(data) {
  return request({
    url: 'save-individual-chat-message',
    method: 'post',
    data
  })
}
export function getMessageList(data) {
  return request({
    url: 'get-message-list',
    method: 'post',
    data
  })
}

// add new room for walk-in conference
export function addNewRoom(data) {
  return request({
    url: 'get-available-rooms/' + data.company_id,
    method: 'get',
  })
}

// add new room for walk-in conference
export function addStaffConference(data) {
  return request({
    url: 'save-direct-conference',
    method: 'post',
    data
  })
}

export function updateRecording(data) {
  return request({
    url: 'appointment-update-recording',
    method: 'post',
    data
  })
}


export function getChatList(data) {
  return request({
    url: 'get-chat-message',
    method: 'post',
    data
  })
}
// // delete tab  rooms for walk-in conference
// export function deleteConference(data) {
//   return request({
//     // walkin-completed-flag/update
//     url: 'delete-direct-conference',
//     url: 'delete-direct-conference',
//     method: 'post',
//     data
//   })
// },

// update status is_walkin completed
export function walkinComplete(data) {
  return request({
    url: 'walkin-completed-flag/update',
    method: 'post',
    data
  })
}


// reject staff when staff click on reject button added on 2/11/2021
export function staffReject(data) {
  return request({
    url: 'update-walkin-related-flag',
    method: 'post',
    data
  })
}
// reject staff when staff click on reject button added on 2/11/2021
export function updateConference(data) {
  return request({
    url: 'update-conference-related-flag',
    method: 'post',
    data
  })
}

export function staffDissconnectedEvent(data) {
  return request({
    url: 'common-events',
    method: 'post',
    data
  })
}


// copy snippet added on 5/06/2022
export function copySnippet(data) {
  return request({
    url: 'copy-snippet',
    method: 'post',
    data
  })
}
export function getQuestionFields(data) {
  return request({
    url: '/get-question-option-field',
    method: 'post',
    data
  })
}



export function getCustomStyle(data) {
  return request({
    url: '/get-custom-style',
    method: 'post',
    data
  })
}

export function updateRealStartEndTime(data) {
  return request({
    url: 'real-start-end-time/update',
    method: 'post',
    data
  })
}

export async function downloadIdentityDocument(fileName) {
  try{
    const response = await request({
      url: '/download-identity-document',
      method: 'post',
      data: {file: fileName},
      responseType: 'blob'
    });
    return response;
  }catch(error) {
    throw error;
  }
}

export function getStatus(data) {
  return request({
    url: '/update-appointment-status',
    method: 'post',
    data
  })
}

export function sendSmsToUser(data) {
  return request({
    url: '/send-sms-to-user',
    method: 'post',
    data,
  })
}
export function getUserAppointments(data) {
  return request({
    url: '/getappointments/'+data.id,
    method: 'get',
  })
}
export function getProfileCompleteness(data) {
  return request({
    url: '/profilecompleteness/'+data.id,
    method: 'get',
  })
}
export function getAppointmentDetails(data) {
  return request({
    url: '/getappointmentdetail/'+data.id,
    method: 'get',
  })
}
export function getUserDocuments(data = {}) {
  data._method = 'get';
  return request({
    url: 'appointment-files',
    method: 'POST',
    data
  })
}

export function userEditDocuments(data) {
  return request({
    url: `appointmentfiles/${data.id}/edit`,
    method: 'get',
  })
}
export function getUserEditDocuments(data) {
  return request({
    url: `appointments/${data.id}/files/edit/`,
    method: 'get',
  })
}

export function uploadAndReplaceDocumentForUser(question_id, formData) {
  formData.append('_method','PATCH');
 return request({
  url: `appointment-files/${question_id}`,
  method: 'post',
  data: formData

 }); 
}

export function staffUserUpdate(question_id, formData) {
  formData.append('_method','PATCH');
 return request({
  url: `staff-appointment-files/${question_id}`,
  method: 'post',
  data: formData

 }); 
}
export function getUserDocumentsById(data = {}) {
  data._method = 'get';
  return request({
    url: 'staff-appointment-files',
    method: 'POST',
    data
  })
}

export function deleteAnswerByStaff(question_id, answer_id) {
  return request({
    url: `staff-appointment-files/${question_id}/${answer_id}`,
    method: 'DELETE'
  })
}

export function rejectAnswerByStaff(data) {
  return request({
    url: `staff-appointment-files/reject`,
    method: 'POST',
    data
  })
}

export function saveRecording(input) {
  return request({
    url: `appointment-recording`,
    method: 'POST',
    data: input
  }) 
}

export function getRecordings(input = {}) {
  input._method = 'GET';
  return request({
    url: `appointment-recording`,
    method: 'POST',
    data: input
  }) 
}

export function getRecordingsByAppointment(input = {}) {
  input._method = 'GET';
  return request({
    url: `appointment-recording/by-appointment`,
    method: 'POST',
    data: input
  }) 
}

export function appointmentStaffPing(uuid) {
  return request({
    url: 'appointment/staff/ping',
    method: 'post',
    data: {uuid: uuid}
  });
}

export function appointmentUserPing(data={}) {
  return request({
    url: 'appointment/user/ping',
    method: 'post',
    data
  });
}

export function saveUserConferenceDeviceApi(data) {
  console.log(data);
  return request({
    url: 'save-setting-fields/'+data.appointment_id,
    method: 'post',
    data
  })
}

export function getUserConferenceDeviceApi(data) {
  return request({
    url: 'get-user-setting-fields/'+data.appointment_id,
    method: 'get',
    
  })
}
export function getIndividualChatMessages(data) {
  return request({
    url: 'chat-messages',
    method: 'post',
    data
  })
}

export function updateSeenStatus(data) {
  return request({
    url: 'chat-message/seen',
    method: 'post',
    data
  })
}

// add new room for walk-in conference
export function getAppointmentCounts(data) {
  return request({
    url: 'get-autobooking-off-appointments/' + data.company_id,
    method: 'get',
  })
}

/**
 * get chat count
 * @param {*} param0 
 * @param {*} data 
 */
export function getChatCounts(data) {
  return request({
    url: 'get-unseen-chats-count/' + data,
    method: 'get'
  })
}
