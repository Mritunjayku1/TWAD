

<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<link href="library/css/tooltip.css" rel="stylesheet">
<script src='JS/complaints/registerComplaint.js'></script>
<table>
<c:if test="${!empty response}">
							<tr>
								<td colspan="2"
									style='text-align: center; font-family: monospace; font-size: 14px; color:#FF0000;'>${response}</td>
							</tr>
						</c:if>
	
</table>
<form:form method="GET" id="SendSMSses"
	commandName="SendSMSses" action='SendSMSAction.do'
	enctype="multipart/form-data">
	
	

	<table class='table-bordered table table-striped display'
		style='width: 100%;'>

		<tr>
			<td><spring:message code="label.To" /></td>
			<td><input type="text" path="SMSSenterNumber" name="SMSSenterNumber" required
				class="character" id="SMSSenterNumber" /></td>

		</tr>

		<tr>
			<td><spring:message code="label.message" /></td>
			<td><form:textarea path="SMSContent" required="true"
					id="SMSContent"></form:textarea></td>

		</tr>



		<tr class='titleHeader'>
			<td></td>
			<td style='text-align: center;' colspan='6'><input
				type="submit" placeholder="9999999999" id="btnSave"
				value="<spring:message code="label.btnSend"/>" /> <input
				type="button" id="btnReset"
				value="<spring:message code="label.btnReset"/>" /></td>
		</tr>

	</table>



</form:form>

