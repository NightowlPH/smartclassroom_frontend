import { Component, OnInit} from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { ErrorHandlerService } from '../../../error-handler.service';
import { AdminRoomStatusServcie } from './room-status.service';

import * as $ from 'jquery'

declare var $: any;

@Component
({
	selector: 'room-status-cmp',
	templateUrl: 'room-status.component.html'
})

export class AdminRoomStatusComponent implements OnInit
{

	constructor(private adminRoomStatusServcie: AdminRoomStatusServcie, private errorHandlerService: ErrorHandlerService){}

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

	ngOnInit()
	{				
		this.adminRoomStatusServcie.GetRoomStatus()
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
							$("#"+room['room_id']+"-"+device['device_id']).ionRangeSlider({					
					            min: 16,
					            max: 30,
					            from: 24,
					            postfix: "°",
					            prettify: false,
					            hasGrid: true,
					            disable: false,
					            room_id: room['room_id'],
					            device_id: device['device_id'],
					            onFinish: function(data)
					            {					            	
					            	var room_id = data['input'][0]['id'].slice(0,data['input'][0]['id'].indexOf('-'))
					            	var device_id = data['input'][0]['id'].slice(data['input'][0]['id'].indexOf('-')+1,data['input'][0]['id'].length)
					            	var temperature = data['fromNumber']
														            	
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
		this.adminRoomStatusServcie.room_id = room_id
		this.adminRoomStatusServcie.GetAllDevice()
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
			this.adminRoomStatusServcie.AddRoomDevice(data)
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
		this.adminRoomStatusServcie.deleteRoomDevice(id)
		.subscribe( data =>
		{
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
				{
					this.errorHandlerService.handleError(error)
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
}