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
	key: string = 'id'
	reverse: boolean = false
	row = 10
	totalUsr: number
	tempID
	filter: string

	ngOnInit()
	{		
		this.adminRoomStatusServcie.GetRoomStatus()
		.subscribe( data =>
		{			
			this.room_status = data['room_status']
		})		

        $(document).ready(function(){
			$("#ionrange_3").ionRangeSlider({
	            min: 16,
	            max: 30,
	            from: 24,
	            postfix: "°",
	            prettify: false,
	            hasGrid: true,
	            disable: false,
	            onFinish: function(data)
	            {
	            	console.log(data['fromNumber'])
	            }
	        });
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
		this.key = key;
		this.reverse = !this.reverse;
		if(this.class[0][id] == "" || this.class[0][id] == "-asc")
		{
			this.class[0][id] = "-desc"
		}
		else if(this.class[0][id] == "-desc")
		{
			this.class[0][id] = "-asc"
		}		
		this.class[1][this.tempID] = ""
		this.class[1][id] = "active"
		this.tempID = id		
	}
}