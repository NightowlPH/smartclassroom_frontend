import { Component, OnInit} from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { ErrorHandlerService } from '../../../error-handler.service';
import { AdminRoomStatusService } from './room-status.service';

import * as $ from 'jquery'

declare var $: any;

var temp_change: boolean = false
var room_status_id: string
var temperature: number

@Component
({
	selector: 'room-status-cmp',
	templateUrl: 'room-status.component.html'
})

export class AdminRoomStatusComponent implements OnInit
{

	constructor(private adminRoomStatusService: AdminRoomStatusService, private errorHandlerService: ErrorHandlerService){}

	room_status: object[]
	devices: object[]
	

	class = [["","",""],["","",""]]
	key2: string = 'id'
	reverse2: boolean = false
	row2 = 10
	totalUsr: number
	tempID2
	filter2: string
	p2: number = 1;

	filter: string
	row = 9
	p = 1

	ngOnInit()
	{				
		this.adminRoomStatusService.GetRoomStatus()
		.subscribe( data =>
		{						
			this.room_status = data['room_status']
			this.room_status.forEach( room =>
			{						
				room['devices'].forEach( device =>
				{					
					if(device['remote_design'] == "Temperature Slider")
					{
						$(document).ready(function(){
							$("#"+device['room_status_id']).ionRangeSlider({					
					            min: 16,
					            max: 30,
					            from: 24,
					            postfix: "°",
					            prettify: false,
					            hasGrid: true,
					            disable: false,					           
					            onFinish: function(data)
					            {									            	     
					            	var room_status_id1 = data['input'][0]['id']					            	
					            	var temperature1 = data['fromNumber']
					            	console.log(temperature1)
					            	// temperature = temperature1
					            	// room_status_id = room_status_id1
					            	// temp_change = true								       	
					            }
					        });
						})
					}					
				})				 
			})					
		})		       
	}

	getRoomDevice(room_id)
	{
		this.adminRoomStatusService.room_id = room_id
		this.adminRoomStatusService.GetAllDevice()
		.subscribe( data =>
		{
			// this.sessionService.updateToken(data['token'])
			this.devices = data['devices']
			console.log("devices", this.devices)
			this.totalUsr = this.devices.length
			console.log(this.totalUsr)
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	addRoomDevice(input: NgForm)
	{		
		var data = []
		this.devices.forEach( device =>
			{
				if(input.value["a"+device['id']] == true)
				{															
					data.push(device['id'])
				}			
			})
		console.log(data)
		if(data.length != 0)
		{
			this.adminRoomStatusService.AddRoomDevice(data)
			.subscribe( data =>
			{
				this.ngOnInit()
			},(error: HttpErrorResponse) =>
				{
					this.errorHandlerService.handleError(error)
				})
		}
	}

	deleteRoomDevice(id: string)
	{
		this.adminRoomStatusService.deleteRoomDevice(id)
		.subscribe( data =>
		{
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
				{
					this.errorHandlerService.handleError(error)
				})
	}

	valuechange(value: any)
	{		
		var room_status_id = value['target']['id']		
		var data = {value: value['target']['checked']}
		this.adminRoomStatusService.ControlDevice(data,room_status_id)
		.subscribe( data =>
		{
			this.ngOnInit()
		})
	}

	sort(key, id: number)
	{				
		this.key2 = key;
		this.reverse2 = !this.reverse2;
		if(this.class[0][id] == "" || this.class[0][id] == "-asc")
		{
			this.class[0][id] = "-desc"
		}
		else if(this.class[0][id] == "-desc")
		{
			this.class[0][id] = "-asc"
		}		
		this.class[1][this.tempID2] = ""
		this.class[1][id] = "active"
		this.tempID2 = id		
	}

	manageRow2(length: number)
	{		
		this.row2 = length
		if(length == 200)
		{
			this.row2 = this.totalUsr
		}		
		this.selecTag()
	}

	selecTag()
	{	
		var class_name = document.getElementById("rt-selectList").className		
		if(class_name == "dropdown-menu")
		{
			document.getElementById("rt-selectList").className += " show"
		}
		if(class_name == "dropdown-menu show")
		{
			document.getElementById("rt-selectList").className = "dropdown-menu"
		}
	}	

	ngDoCheck()
	{
		if(temp_change == true)
		{
			var data = {value: temperature}
			this.adminRoomStatusService.ControlDevice(data,room_status_id)
			.subscribe( data =>
			{
				this.ngOnInit()
			})
			temp_change = false
		}
	}
}